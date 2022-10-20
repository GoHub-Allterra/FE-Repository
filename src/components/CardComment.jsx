import React from "react";

export default function CardComment() {
  return (
    <div className="container flex w-12/12  bg-bg-color3 dark:bg-bg-dark2 my-2 p-2">
      <img
        src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
        alt=""
        className="w-20 h-20 flex-none mt-3 mr-3 border-solid border-2  border-bg-dark items-center rounded-full"
      />
      <div className="flex-initial my-3">
        <p className="font-pt-sans text-black dark:text-white text-xs lg:text-sm">
          {/* username */}Balonku ada lima, rupa-rupa warnanya. Merah kuning
          kelabu, merah muda dan biru. Meletus balon hijau. Dor! Hatiku sangat
          kacau. Balonku tinggal empat ku pegang erat-erat.
        </p>
        <p className="text-xs lg:text-sm text-slate-700">
          Yesterday at 12:24pm
        </p>
        <p className="text-xs text-black py-1">Lihat Komentar</p>
      </div>
    </div>
  );
}
