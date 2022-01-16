
class UserCard extends HTMLElement {
    constructor() {
      // Part 1 Expose - TODO
      super();
      // You'll want to attach the shadow DOM here
      let shadow = this.attachShadow({mode: 'open'});
    }
  
    set data(data) {
      // This is the CSS that you'll use for your recipe cards
      const styleElem = document.createElement('style');
      const styles = `
        .user-pfp {
          height: 250px;
          width: 250px;
        }
      `;
      styleElem.innerHTML = styles;
      console.log(data);
      // Here's the root element that you'll want to attach all of your other elements to
      const card = document.createElement('article');
      card.setAttribute('class','user-card');
  
      // create clickable image
      // const image_view = document.createElement("img");
      // image_view.setAttribute("class", "user-pfp");
      // console.log(data["song"]);
      // image_view.setAttribute("src", data["pfp"]);
      // if (data["pfp"] != null) {
      //   image_view.setAttribute("src", data["pfp"]);
      // }
      // else {
      //   image_view.setAttribute("src", "./fake"
      // }
      // card.appendChild(image_view);
  
      const user_name = document.createElement("p");
      user_name.setAttribute("class", "user-name");
      user_name.innerHTML = data["name"];
      card.appendChild(user_name);

      const user_song = document.createElement("p");
      user_song.setAttribute("class", "user-song");
      user_song.innerHTML = data["song_name"];
      card.appendChild(user_song);
      
      const add_btn = document.createElement("button");
      add_btn.setAttribute("class", "add-btn");
      add_btn.setAttribute("type", "button");
      add_btn.innerHTML = "add me";
      card.appendChild(add_btn);

    
      this.shadowRoot.append(styleElem,card);
    }
  }

  customElements.define('user-card', UserCard);
