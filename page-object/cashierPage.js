module.exports={

url:'',

elements:{
    mid:'#MID',
    token:'input[name="SSO_TOKEN"]',
    pay: 'button[type=button]',
},
commands:[{

    setMid(Txnmid){
        return this
        .clearValue('@mid')
        .setValue('@mid',Txnmid)
       

    },
    setSsoToken(ssoToken){

        return this
        .clearValue('@token')
        .setValue('@token',ssoToken)
       

    },
    payTxn(){
        return this
        .click('@pay')
    }
    
}]

}