export function getAgoTime(dateInput) {
    const date = new Date(dateInput);

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Determine AM or PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert 24hr → 12hr
    hours = hours % 12;
    if (hours === 0) hours = 12;

    return `${hours}:${minutes} ${period}`;
}
