import React from 'react';
import { Link } from 'react-router-dom';
import LogoHorizontal from './LogoHorizontal';
import AfCDCLogo from '../assets/AfCDC-logo.svg';

function Header() {
  return (
    <div className="bg-white border-b border-zinc-200 border-solid box-border content-stretch flex items-center justify-between p-4 sm:p-6 relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1200px] mx-auto min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex gap-2 sm:gap-4 items-center relative shrink-0">
          <Link to="/">
            <LogoHorizontal size="small" className="h-[28px] sm:h-[40px] relative shrink-0 w-[62px] sm:w-[89px] cursor-pointer" />
          </Link>
          <div 
            className="w-[2px] h-[30px] sm:h-[40px]" 
            style={{ background: 'repeating-linear-gradient(to bottom, #55575A 0px, #55575A 2px, transparent 2px, transparent 4px)' }}
          />
          <img src={AfCDCLogo} alt="Africa CDC" className="h-[28px] sm:h-[40px] w-auto" />
        </div>
        <div className="content-stretch flex gap-4 items-center relative shrink-0">
          <Link to="/guides" className="box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0 cursor-pointer hover:bg-zinc-50 transition-colors">
            <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
              <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                Guides
              </p>
            </div>
          </Link>
          <div className="bg-zinc-100 box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0">
            <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
              <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

