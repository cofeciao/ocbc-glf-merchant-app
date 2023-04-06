import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./BeneficialOwnership.scss";

// import constants
import { CONTINUE_LATER, STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

//import types
import { IBeneficialOwnership } from "./BeneficialOwnership";

//import components
import SectionWrapper from "../SectionWrapper";
import BeneficialOwnerCompany from "./BeneficialOwnerCompany";

// stores
import { saveDataBeneficialOwnership } from "@/store/form";

const BeneficialOwnership: React.FC<IBeneficialOwnership.IProps> = forwardRef(({  }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  const {
    LIST_STEP: {
      beneficialOwner: {
      title,
       section: {
        beneficialOwnerOfTheCompany: {
          titleBeneficialOwnerOfTheCompany,
          labelUploadCertificateOfIncumbency,
          listRadio
        }
       }
      },
    },
  } = STEP_RM;

  // States
  const [loading, setLoading] = useState(false);
  const [dataBenificialOwnerShip, setDataBenificialOwnerShip] = useState<any>({
    valueMethodDoyouPrefer: "",
    beneficialOwnerImage: null,
    certificateIncumbencyImage: null,
    beneficialOwner: {
      items: [{
        salutation: "mdm",
        name: "",
        designation: "",
        nricPassport: "",
        dateOfBirth: "",
        nationality: "",
        blockHouseNumber: "",
        streetName: "",
        unitName: "",
        buildingName: "",
        postalCode: ""
      }]
    }
  });

   // form
   const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    getValues,
    reset,
    setError,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      items: [{
        salutation: "",
        name: "",
        designation: "",
        nricPassport: "",
        dateOfBirth: "",
        nationality: "",
        blockHouseNumber: "",
        streetName: "",
        unitName: "",
        buildingName: "",
        postalCode: ""
      }]
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  const handleAddOutlet = () => {
    append({
      salutation: "",
      name: "",
      designation: "",
      nricPassport: "",
      dateOfBirth: "",
      nationality: "",
      blockHouseNumber: "",
      streetName: "",
      unitName: "",
      buildingName: "",
      postalCode: ""
    })
  };

  /**
   * Set data from Beneficial Ownership section
   * @param data
   */
  const getDataSensitiveStep = (datas: any) => {
    dispatch(saveDataBeneficialOwnership(datas));
  };

  /**
   * Retrieves data of Beneficial Ownership from Store
   */
  const dataBeneficialOwnerShipStore = useSelector(
    (state: any) =>
      state.form.beneficialOwnerShipStep
  );

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.sensitiveData)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    let data;
    if (dataBenificialOwnerShip.valueMethodDoyouPrefer === "fill_in_here") {
      data = {...dataBenificialOwnerShip, beneficialOwnerImage: null, beneficialOwner: {items: getValues().items}} 
    }
    if (dataBenificialOwnerShip.valueMethodDoyouPrefer === "upload_a_list") {
      data = {...dataBenificialOwnerShip, beneficialOwner: {items: []}}
    }
    history.push(URL_MANUAL_FLOW.feeRates);
    getDataSensitiveStep({...dataBenificialOwnerShip, beneficialOwner: {items: getValues().items}})
  }
  /**
  * render UI Button
  * @returns {HTML}
  */
  const renderButton = () => {
    return (
      <Button 
        backgroundClass="bgGunmetalBluegrey" 
        onClick={handleNext}
        // disabled={!isValid || !isDirty}
      >
        Next
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  useEffect(() => {
    if (Object.keys(dataBeneficialOwnerShipStore).length > 0) {
      replace(dataBeneficialOwnerShipStore.beneficialOwner.items)
      setDataBenificialOwnerShip(dataBeneficialOwnerShipStore)
    }
  }, [dataBeneficialOwnerShipStore, setDataBenificialOwnerShip])

  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }

      <Box className={cx('benefitcial-ownership')}>
        <div className="benefitcial-ownership-category" >
          <Category class="title">{title}</Category>
        </div>

        <SectionWrapper cx={cx} title={titleBeneficialOwnerOfTheCompany}>
          <BeneficialOwnerCompany 
            listRadio={listRadio} 
            dataBenificialOwnerShip={dataBenificialOwnerShip} 
            setDataBenificialOwnerShip={setDataBenificialOwnerShip}
            fields={fields}
            errors={errors}
            reset={reset}
            register={register}
            setValue={setValue}
            setError={setError}
            remove={remove}
            handleAddOutlet={handleAddOutlet}
          />
        </SectionWrapper>
        <Divider />
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={handlePrev}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className={cx('d-inline')}>
              <Link to="/">{CONTINUE_LATER}</Link>
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
    </Box>
  </React.Fragment>
  )
});

export default BeneficialOwnership;