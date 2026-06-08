/** @format */

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-sm text-white/55 sm:flex-row">
        <p>© {new Date().getFullYear()} Lucky. All rights reserved.</p>
        <div>
          <p>
            Powered by{" "}
            <a
              className="hover:text-white uppercase"
              href="https://infobymp.vercel.app/"
              target="_blank">
              MP Group{" "}
              {/* <img
                src="/mp-group-logo.png"
                alt=""
                srcset=""
                className="h-[40px] inline"
              /> */}
            </a>{" "}
          </p>
          <p className="capitalize">Build your business with us</p>
        </div>
      </div>
    </footer>
  );
}
