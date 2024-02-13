import { useDispatch, useSelector } from "react-redux";
import { getBusinessList } from "scripts/apiCalls";
import { useEffect } from "react";
import { setBusinessList } from "slices/sitesAndBusiness";

const useBusiness = () => {
  const businessList = useSelector(
    ({ sitesAndBusiness: { businessList } }) => businessList
  );
  const dispatch = useDispatch();

  // API call to get businessList
  const refreshBusinessList = async () => {
    const businessList = await getBusinessList();
    dispatch(setBusinessList(businessList));
  };

  useEffect(() => {
    if (businessList.length === 0) refreshBusinessList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    businessList,
    refreshBusinessList,
  };
};

export default useBusiness;
