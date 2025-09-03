// MediVault - simple front-end app with localStorage data model

const StorageKeys = {
  users: 'mv_users',
  prescriptions: 'mv_prescriptions',
  session: 'mv_session',
};

function seedIfEmpty() {
  const existingUsers = JSON.parse(localStorage.getItem(StorageKeys.users) || 'null');
  const existingPrescriptions = JSON.parse(localStorage.getItem(StorageKeys.prescriptions) || 'null');
  if (!existingUsers) {
    const users = [
      { id: 'u-admin', username: 'admin', password: 'admin123', name: 'Admin User', role: 'Admin', dob: '1980-01-01', email: 'admin@medivault.local' },
      { id: 'u-doctor', username: 'doctor', password: 'doctor123', name: 'Dr. Jade Green', role: 'Doctor', dob: '1975-04-18', email: 'jade.green@medivault.local' },
      { id: 'u-patient', username: 'patient', password: 'patient123', name: 'Sam Patient', role: 'Patient', dob: '1995-11-22', email: 'sam.patient@medivault.local' },
    ];
    localStorage.setItem(StorageKeys.users, JSON.stringify(users));
  }
  if (!existingPrescriptions) {
    const now = new Date();
    const fmt = (d) => d.toISOString().slice(0,10);
    const start = fmt(new Date(now.getFullYear(), now.getMonth(), now.getDate()-7));
    const end = fmt(new Date(now.getFullYear(), now.getMonth(), now.getDate()+7));
    const prescriptions = [
      { id: crypto.randomUUID(), userId: 'u-patient', drug: 'Amoxicillin', dosage: '500 mg', frequency: '3x daily', start, end, prescriber: 'Dr. Jade Green', notes: 'Take with food' },
    ];
    localStorage.setItem(StorageKeys.prescriptions, JSON.stringify(prescriptions));
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem(StorageKeys.users) || '[]');
}
function setUsers(users) {
  localStorage.setItem(StorageKeys.users, JSON.stringify(users));
}
function getPrescriptions() {
  return JSON.parse(localStorage.getItem(StorageKeys.prescriptions) || '[]');
}
function setPrescriptions(rx) {
  localStorage.setItem(StorageKeys.prescriptions, JSON.stringify(rx));
}
function getSession() {
  return JSON.parse(localStorage.getItem(StorageKeys.session) || 'null');
}
function setSession(s) {
  if (!s) localStorage.removeItem(StorageKeys.session);
  else localStorage.setItem(StorageKeys.session, JSON.stringify(s));
}

seedIfEmpty();

// Elements
const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const userList = document.getElementById('userList');
const userSearch = document.getElementById('userSearch');
const currentUserName = document.getElementById('currentUserName');
const currentUserRole = document.getElementById('currentUserRole');
const profileCard = document.getElementById('profileCard');
const addPrescriptionBtn = document.getElementById('addPrescriptionBtn');
const prescriptionTbody = document.getElementById('prescriptionTbody');
const prescriptionFilter = document.getElementById('prescriptionFilter');

// Modal
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const prescriptionForm = document.getElementById('prescriptionForm');
const rxId = document.getElementById('rxId');
const rxDrug = document.getElementById('rxDrug');
const rxDosage = document.getElementById('rxDosage');
const rxFrequency = document.getElementById('rxFrequency');
const rxStart = document.getElementById('rxStart');
the rxEnd = document.getElementById('rxEnd');
const rxNotes = document.getElementById('rxNotes');

function show(view) {
  if (view === 'login') {
    loginView.hidden = false;
    dashboardView.hidden = true;
    logoutBtn.hidden = true;
  } else {
    loginView.hidden = true;
    dashboardView.hidden = false;
    logoutBtn.hidden = false;
  }
}

function login(username, password) {
  const user = getUsers().find(u => u.username === username && u.password === password);
  if (!user) return false;
  setSession({ userId: user.id });
  return true;
}

function logout() {
  setSession(null);
  show('login');
}

function openModal(title, data) {
  document.getElementById('modalTitle').textContent = title;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  if (data) {
    rxId.value = data.id || '';
    rxDrug.value = data.drug || '';
    rxDosage.value = data.dosage || '';
    rxFrequency.value = data.frequency || '';
    rxStart.value = data.start || '';
    rxEnd.value = data.end || '';
    rxNotes.value = data.notes || '';
  } else {
    rxId.value = '';
    rxDrug.value = '';
    rxDosage.value = '';
    rxFrequency.value = '';
    rxStart.value = '';
    rxEnd.value = '';
    rxNotes.value = '';
  }
}
function closeModal() {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

function renderUsers(filterText = '') {
  const allUsers = getUsers();
  const text = filterText.trim().toLowerCase();
  const items = allUsers.filter(u => (
    !text || u.name.toLowerCase().includes(text) || u.username.toLowerCase().includes(text) || u.role.toLowerCase().includes(text)
  ));
  userList.innerHTML = '';
  for (const u of items) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="mv-user-list__avatar">👤</span>
      <div style="display:grid">
        <span class="mv-user-list__name">${u.name}</span>
        <span class="mv-user-list__role">${u.role}</span>
      </div>`;
    li.onclick = () => selectUser(u.id);
    userList.appendChild(li);
  }
}

let selectedUserId = null;
function selectUser(userId) {
  selectedUserId = userId;
  renderProfile();
  renderPrescriptions();
}

function renderProfile() {
  const allUsers = getUsers();
  const currentSession = getSession();
  const actor = allUsers.find(u => u.id === currentSession?.userId);
  const selected = allUsers.find(u => u.id === selectedUserId) || actor;
  const canEdit = actor?.role === 'Admin' || actor?.role === 'Doctor' || actor?.id === selected.id;

  currentUserName.textContent = `${actor?.name ?? ''}`;
  currentUserRole.textContent = `${actor?.role ?? ''}`;

  profileCard.innerHTML = `
    <div class="mv-badges">
      <span class="mv-chip">Name: ${selected.name}</span>
      <span class="mv-chip">Role: ${selected.role}</span>
      <span class="mv-chip">DOB: ${selected.dob ?? '—'}</span>
      <span class="mv-chip">Email: ${selected.email ?? '—'}</span>
    </div>
    <div style="margin-top:10px; color: var(--mv-muted); font-size: 12px;">
      ${canEdit ? 'You can add, edit, or delete prescriptions.' : 'Read-only access.'}
    </div>
  `;
  addPrescriptionBtn.disabled = !canEdit;
}

function isExpired(p) {
  if (!p.end) return false;
  const todayStr = new Date().toISOString().slice(0,10);
  return p.end < todayStr;
}

function renderPrescriptions() {
  const all = getPrescriptions();
  const allUsers = getUsers();
  const currentSession = getSession();
  const actor = allUsers.find(u => u.id === currentSession?.userId);
  const targetId = selectedUserId || actor?.id;
  const filter = prescriptionFilter.value;
  const items = all.filter(p => p.userId === targetId).filter(p => {
    if (filter === 'active') return !isExpired(p);
    if (filter === 'expired') return isExpired(p);
    return true;
  });
  const canEdit = actor?.role === 'Admin' || actor?.role === 'Doctor' || actor?.id === targetId;
  prescriptionTbody.innerHTML = '';
  for (const p of items) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.drug}</td>
      <td>${p.dosage}</td>
      <td>${p.frequency}</td>
      <td>${p.start ?? ''}</td>
      <td>${p.end ?? ''}</td>
      <td>${p.prescriber ?? '—'}</td>
      <td>
        <div style="display:flex; gap:8px;">
          <button class="mv-icon-btn" data-action="edit">Edit</button>
          <button class="mv-icon-btn" data-action="delete">Delete</button>
        </div>
      </td>`;
    const [editBtn, delBtn] = tr.querySelectorAll('button');
    editBtn.disabled = !canEdit;
    delBtn.disabled = !canEdit;
    editBtn.onclick = () => {
      openModal('Edit Prescription', p);
    };
    delBtn.onclick = () => {
      if (!confirm('Delete this prescription?')) return;
      const list = getPrescriptions().filter(x => x.id !== p.id);
      setPrescriptions(list);
      renderPrescriptions();
    };
    prescriptionTbody.appendChild(tr);
  }
}

// Events
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (login(username, password)) {
    show('dashboard');
    renderUsers(userSearch.value);
    selectUser(getSession().userId);
  } else {
    alert('Invalid credentials. Try admin/admin123, doctor/doctor123, or patient/patient123.');
  }
});

logoutBtn.addEventListener('click', logout);
userSearch.addEventListener('input', () => renderUsers(userSearch.value));
addPrescriptionBtn.addEventListener('click', () => openModal('Add Prescription'));
prescriptionFilter.addEventListener('change', renderPrescriptions);

modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

prescriptionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const allUsers = getUsers();
  const actor = allUsers.find(u => u.id === getSession()?.userId);
  const targetId = selectedUserId || actor?.id;
  const list = getPrescriptions();
  const data = {
    id: rxId.value || crypto.randomUUID(),
    userId: targetId,
    drug: rxDrug.value.trim(),
    dosage: rxDosage.value.trim(),
    frequency: rxFrequency.value.trim(),
    start: rxStart.value,
    end: rxEnd.value,
    prescriber: actor?.name || '—',
    notes: rxNotes.value.trim(),
  };
  const idx = list.findIndex(p => p.id === data.id);
  if (idx >= 0) list[idx] = data; else list.push(data);
  setPrescriptions(list);
  closeModal();
  renderPrescriptions();
});

// Session boot
const session = getSession();
if (session?.userId) {
  show('dashboard');
  renderUsers('');
  selectUser(session.userId);
} else {
  show('login');
}

