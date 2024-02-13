import { useDispatch, useSelector } from "react-redux";
import { getSiteList } from "scripts/apiCalls";
import { useEffect } from "react";
import { setSiteList } from "slices/sitesAndBusiness";

const useSites = () => {
  const siteList = useSelector((store) => store.sitesAndBusiness.siteList);
  const dispatch = useDispatch();

  // API call to get siteList
  const refreshSiteList = async () => {
    const siteLists = await getSiteList();
    dispatch(setSiteList(siteLists));
  };

  useEffect(() => {
    if (siteList.length === 0) refreshSiteList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    siteList,
    refreshSiteList,
  };
};

export default useSites;
