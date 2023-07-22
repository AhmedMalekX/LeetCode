/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let maxSubstringLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]) + 1, start);
    }

    map.set(s[end], end);
    maxSubstringLength = Math.max(maxSubstringLength, end - start + 1);
  }

  return maxSubstringLength;
};

lengthOfLongestSubstring("abcabcbb");
