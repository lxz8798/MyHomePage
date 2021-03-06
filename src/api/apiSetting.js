const serviceModule = {
    axiosData: {
        url: '/api/axios',
        method: 'get'
    },
    getProgress: {
        url: '/cg',
        method: 'post'
    },
    Register: {
        url: '/api/register',
        method: 'post',
    },
    getMembers: {
        url: '/static/data/members.json',
        method: 'post'
    }
}
const apiSetting = {...serviceModule}

export default apiSetting