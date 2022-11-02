document.addEventListener('DOMContentLoaded', (e) => {

    // Query all messages
    const allMessages = document.querySelectorAll('.message')
    const markBtn = document.querySelector('.mark-as-unread')
    const counter = document.querySelector('.new')

    console.log(markBtn)
    
    
    const markAsUnread = () => {
        // Check which are new and unread
        allMessages.forEach(message => {
            if (message.classList.contains('unread')) {
                message.classList.remove('unread')
                message.classList.add('read')
                // Change the count to zero
                counter.innerHTML = '0'
            } else if(message.classList.contains('read')) {
                message.classList.remove('read')
                message.classList.add('unread')
                counter.innerHTML = '3'
            } else {
                return false
            }
        });

        
        
    }
    
    markBtn.addEventListener('click', (e) => {
        markAsUnread()
    })



})