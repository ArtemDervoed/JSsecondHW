//сервис тестировался в браузере Opera
//все работает и доступно из консоли

var TransferService = (function() {
   function registerPublic(person, account, balance){
    if(balance>=0){
     account.isActive = true;
     account.balance+= balance;
     account.lastOperation = new Date();
     person.addAccount(account);
 } else {
    throw "incorrected balance";
}
return account;
}

 function transferPublic(accountFrom,accountTo){
    if(accountFrom.isActive===true || accountTo.isActive === true){
     if(accountFrom.balance>=0){ 
         var transferSum = accountFrom.balance;
         var d = new Date(),
         formatDate = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
         accountFrom.balance-=transferSum; 
         accountTo.balance+=transferSum; 
         accountTo.lastOperation =formatDate;
         accountFrom.lastOperation = formatDate; 
         console.log("Completed:" + formatDate);
         console.log("From: "+ accountFrom.accountName + " To: "+ accountTo.accountName);
         console.log("Transfer sum: "+ transferSum); 
     } else {
        throw "incorrected balance";
    }
} else {
    throw "account is not active";
  } 
}

function getPersonAccountsPublic(person){
 return person.accounts;
}
return {
    register :registerPublic,
    transfer :transferPublic,
    getPersonAccounts:getPersonAccountsPublic
};
})();
