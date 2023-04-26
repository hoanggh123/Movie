"use strict";

import { imgBaseURL } from "./api.js";
export function createMovieCard(movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="${imgBaseURL}w342${poster_path}"
        class="img-cover"
        alt="${title}"
        loading="lazy"
      />
    </figure>
    <h4 class="title">${title}</h4>
    <div class="meta-list">
      <div class="meta-item">
        <img
          src="assets/images/star.png"
          width="20px"
          height="20px"
          class=""
          alt="rating"
          loading="lazy"
        />
        <span class="span">${vote_average.toFixed(1)}</span>
      </div>
      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>
    <a
      href="detail.html"
      class="card-btn"
      title="${title}"
      onclick="getMovieDetail(${id})"
    ></a>
  `;
  return card;
}
