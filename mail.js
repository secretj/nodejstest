const nodemailer = require('nodemailer');
const email ={
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e541385b0a14be",
          pass: "c2c1502514454a"
    }
};



const send = async(option) => {
    nodemailer.createTransport(email),sendMail(option,(error,info) =>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data ={
    from:'qkrwlsgud890@gmail.com',
    to:'qkrwlsgud890@gmail.com',
    subject:'테스트 메일입니다.',
    text:'nodejs 한시간만에 끝내기'
}
send(email_data);