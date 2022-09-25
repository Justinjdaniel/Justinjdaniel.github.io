export const getFormattedDate = date => {
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });

  const today = new Date();
  const publishedDate = new Date(date);
  const elapsedTime = today - publishedDate;
  const daysAgo = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const monthsAgo = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30));
  const yearsAgo = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));

  if (yearsAgo >= 1) return rtf.format(-yearsAgo, 'year');
  if (daysAgo >= 30) return rtf.format(-monthsAgo, 'month');
  return rtf.format(-daysAgo, 'day');
};
