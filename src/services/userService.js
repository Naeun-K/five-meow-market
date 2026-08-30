import { users } from "../mock/users";

// 현재 로그인한 사용자(Mock)
let currentUser = null;

// 회원가입
export function signup(userData) {
  if (checkEmail(userData.email)) {
    throw new Error("이미 사용 중인 이메일입니다.");
  }

  if (checkNickname(userData.nickname)) {
    throw new Error("이미 사용 중인 닉네임입니다.");
  }

  const newUser = {
    id: crypto.randomUUID(),
    ...userData,
    point: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(newUser);

  return newUser;
}

// 로그인
export function login(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    throw new Error("존재하지 않는 이메일입니다.");
  }

  if (user.password !== password) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  currentUser = user;

  return currentUser;
}

// 로그아웃
export function logout() {
  currentUser = null;
}

// 현재 로그인한 회원
export function getCurrentUser() {
  return currentUser;
}

// 회원 아이디 조회
export function getUserById(userId) {
  return users.find((user) => user.id === userId);
}

// 회원정보 수정
export function updateUser(userId, updatedData) {
  const user = users.find((user) => user.id === userId);

  if (!user) return null;

  const { id, nickname, email, point, createdAt, updatedAt, ...allowedData } =
    updatedData;

  Object.entries(allowedData).forEach(([key, value]) => {
    if (
      typeof value === "string"
        ? value.trim() !== ""
        : value !== null && value !== undefined
    ) {
      user[key] = value;
    }
  });

  user.updatedAt = new Date();

  return user;
}

// 회원 탈퇴
export function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) return false;

  users.splice(index, 1);

  if (currentUser?.id === userId) {
    currentUser = null;
  }

  return true;
}

// 닉네임 중복확인
export function checkNickname(nickname) {
  return users.some((user) => user.nickname === nickname);
}

// 이메일 중복확인
export function checkEmail(email) {
  return users.some((user) => user.email === email);
}

// 로그인 여부 확인
export function isLoggedIn() {
  return currentUser !== null;
}
