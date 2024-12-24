export function bitToKB(bit: number) {
  return `${Math.round(bit / 1024)} KB`;
}

export function formatUpdateTime(date: Date | string): string {
  const now = new Date();
  const givenDate = typeof date === "string" ? new Date(date) : date;

  const diffInMs = now.getTime() - givenDate.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30); // Approximate
  const diffInYears = Math.floor(diffInDays / 365); // Approximate

  if (diffInYears >= 1) {
    return diffInYears === 1
      ? "Updated a year ago"
      : `Updated ${diffInYears} years ago`;
  } else if (diffInMonths >= 1) {
    const remainingDays = diffInDays % 30;
    return remainingDays === 0
      ? `Updated ${diffInMonths} months ago`
      : `Updated ${diffInMonths} months and ${remainingDays} days ago`;
  } else if (diffInDays >= 1) {
    return diffInDays === 1
      ? "Updated a day ago"
      : `Updated ${diffInDays} days ago`;
  } else if (diffInHours >= 1) {
    return diffInHours === 1
      ? "Updated an hour ago"
      : `Updated ${diffInHours} hours ago`;
  } else if (diffInMinutes >= 1) {
    return diffInMinutes === 1
      ? "Updated a minute ago"
      : `Updated ${diffInMinutes} minutes ago`;
  } else {
    return "Updated just now";
  }
}
