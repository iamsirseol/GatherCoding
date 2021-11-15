const user = require('../models/user');
const group = require('../models/group');
// 새로운 방을 db에 넣을 때 이미 db에 있는 방과 중복 확인 부탁드립니다.
// 그러지 않으면 서버 켤 때마다 똑같은 레코드가 다시 추가되는 것 같습니다.
module.exports = {
    post: (req, res) => {
        res.send("Hello World");
    },
    get: (req, res) => {
        res.send("Hello World");
    }    
};
