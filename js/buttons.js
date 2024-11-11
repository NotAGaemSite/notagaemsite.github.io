async function copyLinkToClipboard(i) {
    const link = "https://notagaemsite.github.io/" + i + ".html/";

    try {
        await navigator.clipboard.writeText(link);
        console.log("Copied ( " + link + " ) to clipboard.");
        displayNotification("Copied ( " + link + " ) to clipboard!");
    }
    catch (err) {
        console.error("Coudn't copy to clipboard... : " + err);
    }
}