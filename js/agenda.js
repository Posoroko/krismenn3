/*
*
*
*    Create the elements to populate the dateList
*
*
* */

import { agendaDates as shows } from './config.js'

export {
    populateAgenda
}


const showsList = document.getElementById('showsList');

function populateAgenda() {
    shows.forEach(show => {
        const li = document.createElement('li');
        li.className = 'showsItem';
        li.innerHTML = `
            <div class="line flex gap10">
                <div class="show-date">
                    ${show.date}
                </div>
                <div class="show-venue">
                    ${show.venue}
                </div>
            </div
            
            <div class="line flex gap10">
                <div class="show-location">
                    ${show.location}

                    <div class="language-tag">
                        ${show.language}
                    </span>
                </div>

                
            </div>
        `;
        showsList.appendChild(li);
    });
}
