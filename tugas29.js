function regex(){
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let kata = new RegExp("bersama");
  console.log(kata.exec(data));
}
regex();
