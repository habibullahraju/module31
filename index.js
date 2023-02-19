document.getElementById('change-bg').addEventListener('click', function () {
  const friends =   document.getElementsByClassName('friends');
  for (const friend of friends) {
    friend.style.backgroundColor = 'red';
  }
});
document.getElementById('center-third').addEventListener('click',function () {
    const thirdFriend = document.getElementById('friend-third');
    thirdFriend.style.textAlign = 'center';
});
document.getElementById('add-friend').addEventListener('click',function(){
    const friendsContainer = document.getElementById('friends-container');
    const createE = document.createElement('div');
    createE.innerHTML=`
    <h2>friends-10</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    `;
    friendsContainer.appendChild(createE);
    createE.classList.add('friends');
    
})