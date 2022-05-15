import React, { useState } from "react";
import { useStore } from "../store";
import { listeyeEkle, isaretle, temizle } from "../store/liste/listeAction";
import "../style.css";

const Liste = () => {
  const { listeState, dispatchListe } = useStore();
  const { liste } = listeState;
  const [text, setText] = useState("");

  return (
    <div class="main">
      <h1>YAPILACAKLAR LİSTESİ</h1>
      <input class="input" value={text} onChange={(e) => setText(e.target.value)} />
      <button class="ekle"
        onClick={() => {
          setText("");
          dispatchListe(listeyeEkle(text));
        }}
      >
        Ekle
      </button>
      <div class="kelime">
        {liste.map((item) => (
          <div
            className={item.tamamlandi ? "yapildi" : ""}
            key={item.id}
            onClick={() => dispatchListe(isaretle(item.id))}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button class ="button"  onClick={() => dispatchListe(temizle())}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};

export default Liste;
