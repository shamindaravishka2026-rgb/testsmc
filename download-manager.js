// DOWNLOAD_LINKS: Object to store TMDB ID to download links mapping.
// This object holds the data for which TMDB ID has what download links.
// Each key is a TMDB ID (string), and its value is an array of objects.
// Each inner object has 'quality' (e.g., "1080p") and 'url' (the actual download link).
//
// DOWNLOAD_LINKS: TMDB ID සිට බාගත කිරීමේ සබැඳි සිතියම්ගත කිරීම සඳහා වස්තුව.
// මෙම වස්තුවට කුමන TMDB ID එකට කුමන බාගත කිරීමේ සබැඳි තිබේද යන්න පිළිබඳ දත්ත අඩංගු වේ.
// සෑම යතුරක්ම TMDB ID (string) එකක් වන අතර, එහි අගය වස්තු අරාවක් වේ.
// සෑම අභ්‍යන්තර වස්තුවකම 'quality' (උදා: "1080p") සහ 'url' (සත්‍ය බාගත කිරීමේ සබැඳිය) යන ගුණාංග ඇත.
const DOWNLOAD_LINKS = {
    // Example Movie IDs with download links:
    // උදාහරණ චිත්‍රපට ID බාගත කිරීමේ සබැඳි සමඟ:
    "550": [ // Fight Club TMDB ID
        { quality: "1080p", url: "https://example.com/fight_club_1080p.mp4" },
        { quality: "720p", url: "https://example.com/fight_club_720p.mp4" },
        { quality: "480p", url: "https://example.com/fight_club_480p.mp4" }
    ],
    "1260594": [ // Sumala TMDB ID
        { quality: "1080p", url: "https://example.com/fight_club_1080p.mp4" },
        { quality: "720p", url: "https://example.com/fight_club_720p.mp4" },
    ],
    "157336": [ // Interstellar TMDB ID
        { quality: "2160p (4K)", url: "https://example.com/interstellar_4k.mp4" },
        { quality: "1080p", url: "https://example.com/interstellar_1080p.mp4" }
    ],
    // Example TV Show IDs with download links (you might structure this differently for episodes)
    // උදාහරණ ටීවී වැඩසටහන් ID බාගත කිරීමේ සබැඳි සමඟ (කථාංග සඳහා මෙය වෙනස් ලෙස සකස් කළ හැක)
    "1399": [ // Game of Thrones TMDB ID
        { quality: "Season 1 Complete", url: "https://example.com/got_s1_complete.zip" },
        { quality: "Season 2 Complete", url: "https://example.com/got_s2_complete.zip" }
    ]
    // Add more TMDB IDs and their corresponding download links here
    // මෙහි තවත් TMDB ID සහ ඒවාට අනුරූප බාගත කිරීමේ සබැඳි එක් කරන්න
};

/**
 * displayDownloadButtons: Displays download buttons based on the TMDB ID.
 * If download links exist for the given ID in DOWNLOAD_LINKS, it creates buttons
 * and appends them to the 'downloadButtonsContainer' element.
 * If no links are found, the 'downloadButtonsContainer' remains hidden.
 *
 * displayDownloadButtons: TMDB ID මත පදනම්ව බාගත කිරීමේ බොත්තම් පෙන්වයි.
 * දී ඇති ID සඳහා DOWNLOAD_LINKS හි බාගත කිරීමේ සබැඳි තිබේ නම්, එය බොත්තම් සාදා
 * ඒවා 'downloadButtonsContainer' මූලද්‍රව්‍යයට එක් කරයි.
 * සබැඳි නොමැති නම්, 'downloadButtonsContainer' සැඟවී පවතී.
 *
 * @param {string} tmdbId - The TMDB ID of the movie or TV show.
 */
function displayDownloadButtons(tmdbId) {
    // Get the download buttons container element.
    // බාගත කිරීමේ බොත්තම් බහාලුම් මූලද්‍රව්‍යය ලබා ගන්න.
    const downloadButtonsContainer = document.getElementById('downloadButtonsContainer');

    // Clear any previously displayed buttons from the container.
    // බහාලුමෙන් කලින් පෙන්වා ඇති බොත්තම් ඉවත් කරන්න.
    downloadButtonsContainer.innerHTML = '';

    // Retrieve the download links for the given TMDB ID from the DOWNLOAD_LINKS object.
    // දී ඇති TMDB ID සඳහා බාගත කිරීමේ සබැඳි DOWNLOAD_LINKS වස්තුවෙන් ලබා ගන්න.
    const links = DOWNLOAD_LINKS[tmdbId];

    // Check if there are any links available for the given TMDB ID.
    // දී ඇති TMDB ID සඳහා කිසියම් සබැඳි තිබේදැයි පරීක්ෂා කරන්න.
    if (links && links.length > 0) {
        // If links exist, set the display style of the container to 'flex' to make it visible.
        // සබැඳි තිබේ නම්, බහාලුමේ display style එක 'flex' ලෙස සකසා එය දෘශ්‍යමාන කරන්න.
        downloadButtonsContainer.style.display = 'flex';

        // Iterate over each link object in the 'links' array.
        // 'links' අරාවෙහි ඇති සෑම සබැඳි වස්තුවක්ම පුනරාවර්තනය කරන්න.
        links.forEach(link => {
            // Create a new anchor (<a>) element for the download button.
            // බාගත කිරීමේ බොත්තම සඳහා නව anchor (<a>) මූලද්‍රව්‍යයක් සාදන්න.
            const downloadButton = document.createElement('a');

            // Add the 'download-button' class for styling.
            // styling සඳහා 'download-button' පන්තිය එක් කරන්න.
            downloadButton.classList.add('download-button');

            // Set the href attribute to the download URL.
            // href ගුණාංගය බාගත කිරීමේ URL එකට සකසන්න.
            downloadButton.href = link.url;

            // Set target="_blank" to open the link in a new tab.
            // සබැඳිය නව ටැබ් එකකින් විවෘත කිරීමට target="_blank" සකසන්න.
            downloadButton.target = '_blank';

            // Set rel="noopener noreferrer" for security best practices when opening new tabs.
            // නව ටැබ් විවෘත කිරීමේදී ආරක්ෂක හොඳම භාවිතයන් සඳහා rel="noopener noreferrer" සකසන්න.
            downloadButton.rel = 'noopener noreferrer';

            // Set the inner HTML of the button, including a download icon and the quality text.
            // බාගත කිරීමේ අයිකනයක් සහ quality text ඇතුළත්ව බොත්තමේ අභ්‍යන්තර HTML සකසන්න.
            downloadButton.innerHTML = `
                <span class="material-symbols-outlined">download</span>
                ${link.quality} Download
            `;

            // Append the created download button to the container.
            // සාදන ලද බාගත කිරීමේ බොත්තම බහාලුමට එක් කරන්න.
            downloadButtonsContainer.appendChild(downloadButton);
        });
    } else {
        // If no links are found for the TMDB ID, hide the download buttons container.
        // TMDB ID සඳහා සබැඳි නොමැති නම්, බාගත කිරීමේ බොත්තම් බහාලුම සඟවන්න.
        downloadButtonsContainer.style.display = 'none';
    }
}

// Note: This file only contains the JavaScript for managing download links.
// The HTML structure for the downloadButtonsContainer and its CSS styles
// must remain in your index.html file or be included separately.
//
// සටහන: මෙම ගොනුවේ ඇත්තේ බාගත කිරීමේ සබැඳි කළමනාකරණය සඳහා වන JavaScript පමණි.
// downloadButtonsContainer සඳහා වන HTML ව්‍යුහය සහ එහි CSS styles
// ඔබේ index.html ගොනුවේ තිබිය යුතුය, නැතහොත් වෙනම ඇතුළත් කළ යුතුය.
