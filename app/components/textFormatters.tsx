import React from "react";

/**
 * Highlights specific terms in a string with assigned CSS classes.
 * 
 * @param text - The full string of text to process.
 * @param highlightMap - A record mapping exact string matches to Tailwind CSS classes.
 */
export const highlightText = (text: string, highlightMap: Record<string, string>) => {
  const terms = Object.keys(highlightMap);
  if (terms.length === 0) return text;

  // Escape special regex characters in the terms, then build a capture group
  const escapedTerms = terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'g');

  const parts = text.split(regex);
  return parts.map((part, i) => {
    const matchedClass = highlightMap[part];
    if (matchedClass) {
      return <span key={i} className={matchedClass}>{part}</span>;
    }
    return part;
  });
};