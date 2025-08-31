const stations = {
  hindi: {
    india: {
      "Radio Mirchi": "http://peridot.streamguys.com:7150/Mirchi",
      "AIR FM Gold": "http://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8"
    }
  },
  english: {
    uk: {
      "BBC Radio 1": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p"
    },
    usa: {
      "Radio Paradise": "http://stream-uk1.radioparadise.com/aac-320"
    }
  },
  kashmiri: {
    india: {
      "DD Kashir Radio": "http://air.pc.cdn.bitgravity.com/air/live/pbaudio002/playlist.m3u8"
    }
  },
  punjabi: {
    india: {
      "Punjab Radio": "http://sc-bb.1.fm:8017/"
    }
  }
};

function loadCountries() {
  let lang = document.getElementById("language").value;
  let countrySelect = document.getElementById("country");
  countrySelect.innerHTML = "<option value=''>-- Select Country --</option>";
  if(lang && stations[lang]) {
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
  if(lang && country && stations[lang][country]) {
    Object.keys(stations[lang][country]).forEach(station => {
      stationSelect.innerHTML += `<option value='${stations[lang][country][station]}'>${station}</option>`;
    });
  }
}

function playStation() {
  let stationUrl = document.getElementById("station").value;
  let player = document.getElementById("player");
  let source = document.getElementById("streamSource");
  source.src = stationUrl;
  player.load();
  player.play();
}
