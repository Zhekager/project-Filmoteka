const firebaseConfig = {
  apiKey: "AIzaSyAc20GtxbnwovpESU-Dac2b-nhS3RPE_PM",
  authDomain: "filmoteka-f1322.firebaseapp.com",
  projectId: "filmoteka-f1322",
  storageBucket: "filmoteka-f1322.appspot.com",
  messagingSenderId: "458576107502",
  appId: "1:458576107502:web:92817c1cda70a59af620ff"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
let provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('dashboard').style.display="none"
document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)

      function GoogleLogin(){
        
        firebase.auth().signInWithPopup(provider).then(res=>{
          console.log(res.user)
          document.getElementById('LoginScreen').style.display="none"
          document.getElementById('dashboard').style.display="block"
          showUserDetails(res.user)
        }).catch(e=>{
          console.log(e)
        })
      }

      function showUserDetails(user){
        document.getElementById('userDetails').innerHTML = `
          <img src="${user.photoURL}" style="width:55px; border-radius: 50%;">`
      }

      function checkAuthState(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            document.getElementById('LoginScreen').style.display = "none"
            document.getElementById('user-avatar').classList.add("is-hidden")
            document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
          } else {
            document.getElementById('user-avatar').classList.remove("is-hidden")
          }
        })
      }

      function LogoutUser(){
      
        firebase.auth().signOut().then(()=>{
          document.getElementById('LoginScreen').style.display="block"
          document.getElementById('dashboard').style.display="none"
        }).catch(e=>{
          console.log(e)
        })
      }
      checkAuthState()