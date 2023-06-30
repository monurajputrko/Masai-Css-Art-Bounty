 document.getElementById("Generate").addEventListener("click", function() {
        let github = document.getElementById("github").value;
        let modifiedString = github.replace(/^https:\/\/github\.com\//, "https://cdn.jsdelivr.net/gh/").replace(/\/blob\//g, "@");
        
        let CDN = document.getElementById("CDN");
        CDN.textContent=modifiedString;
        console.log(github);
        console.log(modifiedString);

    });

    const copyBtn = document.getElementById('copy_btn');
    const popup = document.getElementById('popup');

    copyBtn.addEventListener('click', copyToClipboard);

    function copyToClipboard() {
      const textToCopy = modifiedString; // Replace with the text you want to copy
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      showCopiedPopup();
    }

    function showCopiedPopup() {
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2000); // Hide the popup after 2 seconds
    }
