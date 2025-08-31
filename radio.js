const stations = {
  hindi: {
    india: {
      "Radio Mirchi": "https://prclive4.listenon.in/Mirchi",
      "AIR FM Gold": "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8"
    }
  },
  english: {
    uk: {
      "BBC Radio 1": "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one"
    },
    usa: {
      "Radio Paradise": "https://stream.radioparadise.com/aac-320"
    }
  },
  kashmiri: {
    india: {
      "Radio Sharda": "https://stream.zeno.fm/g4ua0b105eeuv"
    }
  },
  punjabi: {
    india: {
      "Punjabi Radio": "https://node-16.zeno.fm/q9t5g88u0tzuv"
    },
    canada: {
      "Desi Punjabi FM": "https://node-22.zeno.fm/zz2t0q88u0hvv"
    }
  }
};

function loadCountries() {
  let lang = document.getElementById("language").value;
  let countrySelect = document.getElementById("country");
  countrySelect.innerHTML = "<option value=''>-- Select Country --</option>";
  if (lang && stations[lang]) {
    Object.keys(stations[lang]).forEach(country => {
      countrySelect.innerHTML += `<option value='${country}'>${country.toUpperCase()}</option>`;
    });
  }
}

function loadStations() {
  let lang = document.getElementById("language").value;
  let country = document.getElementById("country").value;
  let stationSelect = document.getElementById("station");
  stationSelect.innerHTML = "<option value=''>-- Select Channel --</option>";
  if (lang && country && stations[lang][country]) {
    Object.entries(stations[lang][country]).forEach(([stationName, streamUrl]) => {
      stationSelect.innerHTML += `<option value='${streamUrl}'>${stationName}</option>`;
    });
  }
}

function playStation() {
  let stationUrl = document.getElementById("station").value;
  if (!stationUrl) return;
  let player = document.getElementById("player");
  let source = document.getElementById("streamSource");
  source.src = stationUrl;
  player.load();
  player.play();
}
