import axiosInstance from "./axiosInstance"

// 회원 가입
export const registerMemberApi = async (FormData) => {
    const response = await axiosInstance.post('/api/member/register', {
        userId: FormData.userId,
        userName: FormData.userName,
        email: FormData.email,
        password: FormData.password,
        passwordCheck: FormData.passwordCheck
    })

    return response.data;
}

// 로그인
export const loginMemberApi = async (loginData) => {
    const response = await axiosInstance.post('/api/member/login', {
        userId: loginData.userId,
        password: loginData.password
    }, {
        withCredentials: true //세션 쿠키 포함하기 위해서 필요함
    })

    return response.data;
}
//로그아웃
export const logoutMemberApi = async() => {
    const response = await axiosInstance.get('/api/member/logout', {
    withCredentials: true
    })
    return response.data
}

// 현재 로그인 상태 확인
export const checkMemberApi = async() => {
    const response = await axiosInstance.get('/api/member/check', {
        withCredentials: true
    })
    return response.data;
}

