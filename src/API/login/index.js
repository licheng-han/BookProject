import Mock from 'mockjs';

export default Mock.mock('/getLogin', 'get', {
    success: true,
    data: true,
})
