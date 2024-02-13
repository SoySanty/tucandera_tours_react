import { useDispatch, useSelector } from "react-redux";
import { getSiteDetails } from "scripts/apiCalls";
import { useEffect } from "react";
import { addSiteDetails } from "slices/sitesAndBusiness";
import { isEmpty } from "lodash";

const useSiteDetails = ({ keyName }) => {
  const dispatch = useDispatch();

  // Get siteDetails from the store or an empty object
  const siteDetails = useSelector(
    (store) => store.sitesAndBusiness.siteRepository[keyName] || {}
  );

  // API call to get siteList
  const refreshSiteDetails = async () => {
    const siteDetails = await getSiteDetails({ keyName });
    dispatch(addSiteDetails(siteDetails));
  };

  useEffect(() => {
    if (isEmpty(siteDetails)) refreshSiteDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyName]);

  return {
    siteDetails,
    refreshSiteDetails,
  };
};

export default useSiteDetails;
