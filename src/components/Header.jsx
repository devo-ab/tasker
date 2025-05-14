import taskerLogo from "/public/tasker logo.png"

export default function Header() {
  return (
    <div>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container px-20 mx-auto flex items-center gap-x-4">
          <a href="/">
            <img className="h-[45px]" src={taskerLogo} alt="Tasker" />
          </a>
          <p className="text-2xl font-semibold">Tasker</p>
        </div>
      </nav>
    </div>
  );
}
