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

// document.getElementById('dashboard').style.display="none"
document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)

const provider = new firebase.auth.GoogleAuthProvider()

      function GoogleLogin(){
        console.log('Login Btn Call')
        firebase.auth().signInWithPopup(provider).then(res=>{
          console.log(res.user)
          document.getElementById('login').style.display="none"
          document.getElementById('userDetails').style.display = "block"
            document.getElementById('logout').style.display="none"
          showUserDetails(res.user)
        }).catch(e=>{
          console.log(e)
        })
      }

      function showUserDetails(user){
        document.getElementById('userDetails').innerHTML = `
          <img class="user-img" src="${user.photoURL}"> 
            <div class="user-block">
              <p class="user-name">${user.displayName}</p>
              <p class="user-email">${user.email}</p>
            </div>
        `
      }

      function checkAuthState(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            document.getElementById('login').style.display = "none"
            document.getElementById('userDetails').style.display = "block"
            document.getElementById('logout').style.display="block"
            // document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
          }else{            
          }
        })
      }

      function LogoutUser(){
        console.log('Logout Btn Call')
        firebase.auth().signOut().then(()=>{
          document.getElementById('login').style.display="block"
          document.getElementById('userDetails').style.display = "none"
          document.getElementById('logout').style.display="none"
        }).catch(e=>{
          console.log(e)
        })
      }
      checkAuthState()