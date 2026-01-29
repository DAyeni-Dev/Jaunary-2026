export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nameRegex = /^[A-Za-z\s]+$/;

export const validateName = (name) => {
  if (!name || !name.trim()) return "Name is required";
  if (name.trim().length < 3) return "Name must be at least 3 characters";
  if (!nameRegex.test(name.trim())) return "Name must contain only letters";
  return null;
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) return "Email is required";
  if (!emailRegex.test(email)) return "Enter a valid email address";
  return null;
};
