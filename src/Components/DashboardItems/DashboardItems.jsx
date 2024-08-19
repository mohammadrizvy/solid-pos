import { Layers3, LogIn, Tag } from "lucide-react";
import React from "react";
import { FaCartArrowDown, FaListOl, FaTruckArrowRight, FaArrowTrendDown } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineCategory, MdProductionQuantityLimits, MdOutlineStackedBarChart, MdOutlinePayment } from "react-icons/md";
import { RiListSettingsLine, RiAlarmWarningLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { VscExport } from "react-icons/vsc";
import { GiReturnArrow, GiBrokenAxe, GiButterflyWarning } from "react-icons/gi";
import { GoStack } from "react-icons/go";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbTruck, TbTruckDelivery, TbUserCog, TbUserDollar, TbUsers, TbUsersGroup, TbViewfinderOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CgUserAdd } from "react-icons/cg";
import { PiHandCoinsFill } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";


const DashboardItems = () => {
  return (
    <div>
      <li className="pb-2">
        <Link to="/dashboard">
          <RxDashboard /> ড্যাশবোর্ড
        </Link>
      </li>
      <span className="pl-2 font-bold text-xs">মেইন</span>
      <li className="pt-2">
        <details>
          <summary>
            <Tag size={20} />
            পণ্য
          </summary>
          <ul className="py-2">
            <li>
              <a>
                <MdProductionQuantityLimits />
                পণ্য এন্ট্রি
              </a>
            </li>
            <li>
              <a>
                <Layers3 size={16} />
                একাধিক এন্ট্রি
              </a>
            </li>
            <li>
              <a>
                <LuClipboardList size={16} />
                পণ্যের তালিকা
              </a>
            </li>
            <li>
              <a>
                <MdOutlineCategory />
                পণ্য ক্যাটেগরী
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <FaCartArrowDown size={16} />
            পণ্য ক্রয়
          </summary>
          <ul className="py-2">
            <li>
              <a>
                <FaCartArrowDown />
                পণ্য ক্রয়
              </a>
            </li>
            <li>
              <a>
                <FaListOl />
                ক্রয় তালিকা
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <HiOutlineCurrencyBangladeshi size={16} />
            পণ্য বিক্রয়
          </summary>
          <ul className="py-2">
            <li>
              <a>
                <VscExport />
                খুচরা বিক্রয়
              </a>
            </li>
            <li>
              <a>
                <FaTruckArrowRight />
                পাইকারী বিক্রয়
              </a>
            </li>
            <li>
              <a>
                <FaListOl />
                বিক্রয় তালিকা
              </a>
            </li>
            <li>
              <a>
                <GiReturnArrow />
                বিক্রয় পণ্য ফেরত
              </a>
            </li>
            <li>
              <a>
                <GiBrokenAxe />
                ড্রাফট ইনবয়েস
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <MdOutlineStackedBarChart />
            স্টক
          </summary>
          <ul className="py-2">
            <li>
              <a>
                <GoStack />
                পণ্য স্টক
              </a>
            </li>
            <li>
              <a>
                <BiSolidCategoryAlt />
                ক্যাটাগরী স্টক
              </a>
            </li>
            <li>
              <a>
                <FaArrowTrendDown />
                অপর্যাপ্ত স্টক
              </a>
            </li>
            <li>
              <a>
                <RiAlarmWarningLine />
                মেয়াদ শেষ পর্যায়ে
              </a>
            </li>
            <li>
              <a>
                <GiButterflyWarning />
                মেয়াদ উত্তীর্ণ পণ্য
              </a>
            </li>
            <li>
              <a>
                <TbViewfinderOff />
                ড্যামেজ/লস্ট
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li className="pb-2">
        <details>
          <summary>
          <MdOutlinePayment />

            পেমেন্ট
          </summary>
          <ul className="py-2">
            <li>
              <a> <TbUserDollar />
              ক্রেতা পেমেন্ট</a>
            </li>
            <li>
              <a> <FaTruckArrowRight />
              সরবরাহকারী পেমেন্ট</a>
            </li>
            <li>
              <a><TbUsersGroup />
              কর্মীর বেতন পেমেন্ট</a>
            </li>
          </ul>
        </details>
      </li>
      <span className="pl-2 font-bold text-xs">একাউন্ট</span>
      <li className="pt-2">
        <details>
          <summary>
          <TbUserCog/>

            ক্রেতা
          </summary>
          <ul className="py-2">
            <li>
              <a> <CgUserAdd />
              ক্রেতা এন্ট্রি</a>
            </li>
            <li>
              <a> <TbUsers />
              ক্রেতার তালিকা</a>
            </li>
            <li>
              <a><PiHandCoinsFill />

              পয়েন্ট ম্যানেজ</a>
            </li>
          </ul>
        </details>
      </li>

      <li className="pb-2">
        <details>
          <summary>
          <TbTruck />

            সরবরাহকারী
          </summary>
          <ul className="py-2">
            <li>
              <a><TbTruckDelivery />
              সরবরাহকারী এন্ট্রি</a>
            </li>
            <li>
              <a><CiViewList />
              সরবরাহকারী তালিকা</a>
            </li>
          </ul>
        </details>
      </li>
      <span className="pl-2 font-bold text-xs">একাউন্ট</span>
      <li className="pt-2">
        <details>
          <summary>
            <RiListSettingsLine />
            লেনদেন
          </summary>
          <ul className="py-2">
            <li>
              <a>লেনদেন এন্ট্রি</a>
            </li>
            <li>
              <a>সকল লেনদেন সমূহ</a>
            </li>
            <li>
              <a>লেনদেন খাত সমূহ</a>
            </li>
            <li>
              <a>ব্যালেন্স ট্রান্সফার</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a>
          <RiListSettingsLine />
          প্রতিবেদন
        </a>
      </li>

      <li>
        <details>
          <summary>
            <RiListSettingsLine />
            এসএমএস
          </summary>
          <ul className="py-2">
            <li>
              <a>সেন্ড এসএমএস</a>
            </li>
            <li>
              <a>বকেয়া এসএমএস</a>
            </li>
            <li>
              <a>বাল্ক এসএমএস</a>
            </li>
            <li>
              <a>SMS Balance</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <RiListSettingsLine />
            ইউজার একাউন্ট
          </summary>
          <ul className="py-2">
            <li>
              <a>এড ইউজার</a>
            </li>
            <li>
              <a>ইউজার তালিকা</a>
            </li>
          </ul>
        </details>
      </li>
    </div>
  );
};

export default DashboardItems;
