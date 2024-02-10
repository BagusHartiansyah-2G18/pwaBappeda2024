/* eslint-disable no-undef */
const home = {
  // <img class="herosImg" src="heros/hero-image_2.jpg" alt="chef resto">
  async render() {
    return `
        <div class="bweb_informasi" style="background-image: url('./1.jpg'); background-size: cover;">
            <div class="bweb_informasi alfaCoklat ">
                <div class="w80p mauto">
                    <div class="menuLogo">
                        <img src="./logoKSB.png">
                        <a id="menu">☰</a>
                    </div>

                    <div class="flexC brand justifySA">
                        <label class="judul fpacifico cwarning">Bappeda</label>
                        <label class="subjudul fPoppins">badan perencanaan dan pembangunan daerah</label>
                        <label class="judul fPoppins">kabupaten Sumbawa barat</label>
                    </div>

                    <div class="informasi"> 
                        <label class="">
                            <span>Lokasi</span> <br> jl. Bung Karno No. 5 Komplek KTC - Taliwang <br>
                            kabupaten Sumbawa barat
                        </label>
                        <label class="">
                            <span>Email</span> <br><u>Sekretariatbappedaksb@gmail.com </u> <br>
                            <span>Kode Pos </span> : 84455 <br>
                            <span>Tlp</span> : (0372) 8182595
                        </label>
                        <ul id="sosial">
                            <li><a href=""><span class="mdi mdi-instagram"></span> @bappedaKSB</a></li>
                            <li><a href="https://bappedaKSB.com" target="_blank"><span class="mdi mdi-web"></span> bappedaKSB</a></li>
                            <li><a href=""><span class="mdi mdi-youtube"></span> @bappedaKSB</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        ${this.subAplikasi()}
    `;
  },
  async afterRender() {
    // const list = await wscomponent.listRestoran();
    // const listResto = document.getElementById('listResto');
    const header = document.getElementById('header');
    header.style.display = 'none';
  },
  dataApp() {
    const data = [
      {
        app: 'SIPD',
        apps: 'Sistem Informasi Perencanaan Daerah',
        ket: '',
        url: 'https://sipd-ri.kemendagri.go.id/auth/login',
        urlInfo: '',
        logo: 'https://sipd-ri.kemendagri.go.id/assets/media/logos/favicon.ico',
        tahun: '2021',
      }, {
        app: 'KRISNA',
        apps: 'Sistem ...',
        ket: '',
        url: 'https://sso.kl.krisna.systems/login.php',
        urlInfo: '',
        logo: 'https://pbs.twimg.com/profile_images/1164452366034165760/A1EhgZVn_400x400.jpg',
        tahun: '',
      }, {
        app: 'E KINERJA',
        apps: 'Sistem ...',
        ket: '',
        url: 'https://kinerja.bkn.go.id/',
        urlInfo: '',
        logo: 'https://kinerja.bkn.go.id/images/favicon.png',
        tahun: '2021',
      }, {
        app: 'E MUSRENBANG',
        apps: 'Sistem Musyawarah Rencana Pembangunan',
        ket: '',
        url: 'https://bappedaksb.com/apps/musrenbang',
        urlInfo: '',
        logo: './logoB.jpg',
        tahun: '2021',
      }, {
        app: 'E POKIR',
        apps: 'Sistem Pokok Pikiran DPRD',
        ket: '',
        url: 'https://epokir.bappedaksb.com/',
        urlInfo: '',
        logo: './logoB.jpg',
        tahun: '2021',
      }, {
        app: 'E RENJA',
        apps: 'Sistem Rencana Kerja',
        ket: '',
        url: 'https://bappedaksb.com/apps',
        urlInfo: '',
        logo: './logoB.jpg',
        tahun: '2020',
      }, {
        app: 'SIPJ',
        apps: 'Sistem Informasi Pertanggung Jawaban',
        ket: '',
        url: 'https://sipj.bappedaksb.com/',
        urlInfo: '',
        logo: './logoB.jpg',
        tahun: '2024',
      },

    ];

    let fhtml = '';
    data.forEach((v) => {
      fhtml += `
            <div class="boxApp">
                <div class="flexR  pwrap-5">
                    <img src='${v.logo}' height="70px"/>
                    <div class="flexC pwrap_2p">
                        <h4 class="pm0 fzXl fPoppins cinfo">${v.app}</h4>
                        <h5 class="wtext">${v.apps}</h5>
                        <p class="pm0 fzS farial cdark">Tahun ${v.tahun}</p>
                    </div>
                </div>
                <div class="pwrap-5 flexC">
                    <a href="${v.urlInfo}" class="btn binfo m0 radius__10" target="_blank" title="Informasi">
                        <span class="mdi mdi-information-variant"></span>
                    </a>
                    <a href="${v.url}" class="btn bsuccess m0 radius_10" target="_blank" title="Login Apps">
                        <span class="mdi mdi-login-variant"></span>
                    </a>
                </div>
            </div>
        `;
    });
    return fhtml;
  },
  subAplikasi() {
    return `
        <div class="binfo3">
            <div class="w80p mauto">
                <div class="flexC pwrap__5p">
                    <div >
                        <h3 class="fPoppins cinfo">Apps apa saja di BAPPEDA ?</h3> 
                        <p class="pwrap-5">terdapat beberapa Aplikasi atau Sistem yang digunakan untuk mendukung beberapa jenis pekerjaan, diantaranya :
                        </p>
                    </div>
                    <div class="pwrap-10 bweb_apps">
                        ${this.dataApp()}
                    </div>
                </div>
            </div>
        </div>
    `;
  },
};
export default home;
