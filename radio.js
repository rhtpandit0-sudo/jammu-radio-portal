const stations = {
  hindi: {
    india: {
      "Radio Mirchi": "https://prclive4.listenon.in/Mirchi",
      "AIR FM Gold": "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8",
      "Vividh Bharati": "https://air.pc.cdn.bitgravity.com/air/live/pbaudio003/playlist.m3u8",
      "Radio City Hindi": "https://prclive1.listenon.in:9948/",
      "Bollywood Evergreen": "https://stream-153.zeno.fm/k3wyc3k8f2quv"
    },
    dubai: {
      "City 101.6 Dubai": "https://stream-151.zeno.fm/k9gy3r2u9x8uv"
    }
  },

  english: {
    uk: {
      "BBC Radio 1": "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
      "BBC Radio 2": "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two",
      "Capital FM UK": "https://media-ice.musicradio.com/CapitalMP3"
    },
    usa: {
      "Radio Paradise": "https://stream.radioparadise.com/aac-320",
      "Kiss FM USA": "https://icecast.kissfm.ro:8443/kissfm.aac",
      "Hot 108 Jamz": "https://stream-150.zeno.fm/5a8n6t2f3rhvv"
    },
    australia: {
      "Triple J": "https://live-radio01.mediahubaustralia.com/2TJW/mp3/"
    }
  },

  kashmiri: {
    india: {
      "Radio Sharda": "https://stream.zeno.fm/g4ua0b105eeuv",
      "DD Kashir": "https://air.pc.cdn.bitgravity.com/air/live/pbaudio002/playlist.m3u8"
    },
    global: {
      "Koshur Radio": "https://stream-152.zeno.fm/5gkwzv3rc2quv"
    }
  },

  punjabi: {
    india: {
      "Punjabi Radio": "https://node-16.zeno.fm/q9t5g88u0tzuv",
      "Dhol Radio": "https://stream-153.zeno.fm/wb2w3z4td2quv",
      "Desi Music Station": "https://stream-152.zeno.fm/9zv7y9t2p2quv"
    },
    canada: {
      "Desi Punjabi FM": "https://node-22.zeno.fm/zz2t0q88u0hvv",
      "Punjab Rocks": "https://stream-154.zeno.fm/f2t5wq3tq2quv"
    },
    uk: {
      "Akash Radio UK": "https://s10.voscast.com:10672/;",
      "Radio Panj": "https://stream-157.zeno.fm/h7q3y6w2p2quv"
    }
  }
};

function loadCountries() {
  let lang = document.getElementById("language").value;
  let countrySelect = document.getElementById("country");
  countrySelect.innerHTML = "<option value=''>-- Select Country --</option>";
  if (lang && stations[lang]) {
    Object.keys(stations[lang]).forEach(country => {
      countrySelect.innerHTML += `<option value="${country}">${country.toUpperCase()}</option>`;
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
      stationSelect.innerHTML += `<option value="${streamUrl}">${stationName}</option>`;
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
