const getEmail = async auth => {
  const user = typeof auth.email === 'string' ? auth : await auth.getUser();
  return user.email || null;
};

const getUserGroups = async auth => {
  const user = Array.isArray(auth.groups) ? auth : await auth.getUser();
  return user.groups || [];
};

const isUserPermitted = async (auth, permittedGroups = []) => {
  let userGroups = await getUserGroups(auth);
  if (!Array.isArray(userGroups) || !Array.isArray(permittedGroups)) {
    return false;
  }

  // Remove after Okta groups are configured and working fine
  // Start
  let groups = getParameterByName('groups');
  groups = typeof groups === 'string' ? groups.split(',') : [];
  userGroups = userGroups.concat(groups);
  // End

  return Boolean(arrayIntersect(userGroups, permittedGroups).length);
};

const arrayIntersect = (a, b) => {
  return a.filter(function(e) {
    return b.indexOf(e) > -1;
  });
};

const getRole = async auth => {
  const user = await auth.getUser();
  // temp solution for role
  const role = getParameterByName('role');
  return user.access_role || role;
};

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const hasRole = (array, role) => {
  if (array.indexOf(role) > -1) {
    return true;
  }
  return false;
};

export { getEmail, isUserPermitted, getRole, hasRole };
