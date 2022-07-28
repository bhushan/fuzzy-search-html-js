const hashtags = ["twitch", "twitter", "javascript", "html", "css", "web"];
const hashtagInputElement = document.getElementById("hashtag");
const suggestionsElement = document.getElementById("suggestions");

hashtagInputElement.addEventListener("keyup", function (event) {
  const query = event.target.value;

  if (query === "") {
    suggestionsElement.innerHTML = hashtags.join(", ");
    return;
  }

  const result = hashtags.filter((hashtag) => hashtag.startsWith(query));

  for (let index = 0; index < hashtags.length; index++) {
    let hashtag = hashtags[index];
    let tempHashtag = hashtags[index];
    const queryArray = query.split("");
    let isRelevant = true;
    for (let j = 0; j < queryArray.length; j++) {
      const char = queryArray[j];
      const isExists = tempHashtag.indexOf(char);
      if (isExists === -1) {
        isRelevant = false;
        break;
      }

      tempHashtag =
        tempHashtag.slice(0, isExists) + tempHashtag.slice(isExists + 1);
    }

    if (isRelevant) {
      result.push(hashtag);
    }
  }

  suggestionsElement.innerHTML = [...new Set(result)].join(", ");
});
