import React, { useState } from "react";

const today = Date.now();

const initialState = {
  name: "",
  healthyAppearance: "Healthy",
  sex: "Female",
  lastMedicalHistoryUpdate: today,
  ASAClassification: "I",
  chiefComplaint: "exam",
  extraOralHead: "WNL",
  extraOralNeck: "WNL",
  extraOralLymphNodes: "WNL",
  extraOralSkin: "WNL",
  TMJCrepitus: "None",
  TMJPopping: "None",
  TMJTenderness: "None",
  TMJPain: "None",
  TMJMaximumComfortableOpening: "0",
  TMJDeviation: "",
  TMJDeviationDirection: "",
  TMJDeviationAmount: "",
  intraOralPharynx: "WNL",
  intraOralTonsils: "WNL",
  intraOralHardPalate: "WNL",
  intraOralSoftPalate: "WNL",
  intraOralFloorOfMouth: "WNL",
  intraOralLips: "WNL",
  intraOralTongue: "WNL",
  intraOralBuccalMucosa: "WNL",
  intraOralCheeks: "WNL",
  intraOralOralMucosa: "WNL",
  intraOralCancerScreen: "WNL",
  occlusionClass: "I",
  occlusionOverbite: 0,
  occlusionOverjet: 0,
  occlusionCrossbite: "",
  occlusionCrowding: "",
  occlusionAttrition: "",
  occlusionBruxism: "",
  occlusionErosion: "",
  denturesUpper: "None",
  denturesUpperServiceable: false,
  denturesLower: "None",
  denturesLowerServiceable: false,
  periodontalAssessmentGingiva: {
    Health: false,
    Hypertrophic: false,
    Hemorragic: false,
    Fibrous: false,
    Edematous: false,
    Recession: false,
    Puss: false,
    Cyanotic: false,
    Ulcerated: false,
    Clefting: false,
    FrenumPull: false
  },
  periodontalAssessmentMag: "",
  periodontalAssessmentCalculusSub: "Scanty",
  periodontalAssessmentCalculusSupra: "Scanty",
  periodontalAssessmentOhiAids: "",
  periodontalAssessmentOhiFrequency: "",
  periodontalAssessmentRiskFactors: {
    Age: false,
    DryMouth: false,
    Smoking: false,
    Hormonal: false,
    Supplements: false,
    NutritionalHabits: false,
    SystemicIllness: false,
    ImmunoCompromised: false,
    FamilyHistory: false,
    extraInformation: ""
  },
  periodontalAssessmentPerioChartDate: today,
  periodontalAssessmentGingivitis: "",
  periodontalAssessmentPeriodontitis: "None",
  periodontalAssessmentPrognosisMaxillary: "Good",
  periodontalAssessmentPrognosisMaxillaryConcerns: "",
  periodontalAssessmentPrognosisMandibular: "Good",
  periodontalAssessmentPrognosisMandibularConcerns: "",
  periodontalAssessmentTreatmentScalingAppointments: "0",
  periodontalAssessmentPreatmentPerioMaintance: "6",
  periodontalAssessmentTreatmentHomeCare: {
    Brushing: true,
    InterdentalCleaning: true
  },
  periodontalAssessmentTreatmentAdjucts: {
    Periostat: false,
    Oravital: false,
    Arestin: false
  },
  periodontalAssessmentTreatmentPeriodontistReferral: false,
  radiographyWidenedPdl: "",
  radiographyPaLesions: "",
  radiographyBoneLossHorizontal: "",
  radiographyBoneLossVertical: "",
  radiographyImpactedTeeth: "",
  radiographyPoorMargins: "",
  radiographyChartingCompletedOn: today,
  radiographyRecommendedPreventiveTherapy: "",
  hardTissueExamChartingCompletedOn: today,
  hardTissueExamCarriesRiskAssessment: "low",
  recommendedPreventiveTherapySalvaryTest: "",
  recommendedPreventiveTherapyClorhexidineRinse: "",
  recommendedPreventiveTherapyFluoride: "none",
  recommendedPreventiveTherapyRadiographs: "12-18m",
  RecommendedPreventiveTherapyExamFrequency: "9m",
  recommendedPreventiveTherapyAdjuncts: "none",
  diagnosisCarriesPresent: "",
  diagnosisCarriesInTreatmentPlan: "",
  diagnosisFailingRestorationPresent: "",
  diagnosisFailingRestorationInTreatmentPlan: "",
  diagnosisEndodonticPresent: "",
  diagnosisEndodonticInTreatmentPlan: "",
  diagnosisMissingTeethPresent: "",
  diagnosisMissingTeethInTreatmentPlan: ""
};

export const AddExam = () => {
  const [form, setForm] = useState(initialState);
  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="coe form-inputs">
        <div className="form_group">
          <div className="input">
            <label htmlFor="name">Patient Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="patient name"
              value={form.name}
              onChange={event => setForm({ ...form, name: event.target.value })}
            />
          </div>
          <div className="input">
            <label htmlFor="healthAppearance">Health Appearance</label>
            <select
              id="healthAppearance"
              value={form.healthyAppearance}
              onChange={event =>
                setForm({ ...form, healthyAppearance: event.target.value })
              }
            >
              <option value="Healthy">Healthy</option>
              <option value="Poor Health">Poor Health</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="sex">Sex</label>
            <select
              id="sex"
              value={form.sex}
              onChange={event => setForm({ ...form, sex: event.target.value })}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="lastMedicalHistoryUpdate">
              Last Medical History Update
            </label>
            <input
              type="date"
              id="lastMedicalHistoryUpdate"
              name="lastMedicalHistoryUpdate"
              value={form.lastMedicalHistoryUpdate}
              onChange={event =>
                setForm({
                  ...form,
                  lastMedicalHistoryUpdate: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="ASAClassification">ASA Classification</label>
            <select
              id="ASAClassification"
              value={form.ASAClassification}
              onChange={event =>
                setForm({ ...form, ASAClassification: event.target.value })
              }
            >
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="chiefComplaint">Chief Complaint</label>
            <input
              type="text"
              id="chiefComplaint"
              name="chiefComplaint"
              value={form.chiefComplaint}
              onChange={event =>
                setForm({ ...form, chiefComplaint: event.target.value })
              }
            />
          </div>
        </div>

        <div className="form_group extra_oral">
          <h2>Extra Oral</h2>

          <div className="input">
            <label htmlFor="extraOralHead">Head</label>
            <input
              type="text"
              id="extraOralHead"
              name="extraOralHead"
              value={form.extraOralHead}
              onChange={event =>
                setForm({ ...form, extraOralHead: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="extraOralNeck">Neck</label>
            <input
              type="text"
              name="extraOralNeck"
              id="extraOralNeck"
              value={form.extraOralNeck}
              onChange={event =>
                setForm({ ...form, extraOralNeck: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="extraOralLymphNodes">Lymph Nodes</label>
            <input
              type="text"
              name="extraOralLymphNodes"
              id="extraOralLymphNodes"
              value={form.extraOralLymphNodes}
              onChange={event =>
                setForm({ ...form, extraOralLymphNodes: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="extraOralSkin">Skin</label>
            <input
              type="text"
              name="extraOralSkin"
              id="extraOralSkin"
              value={form.extraOralSkin}
              onChange={event =>
                setForm({ ...form, extraOralSkin: event.target.value })
              }
            />
          </div>

          <h1>TMJ</h1>
          <div className="input">
            <label htmlFor="TMJCrepitus">Crepitus</label>
            <select
              id="TMJCrepitus"
              value={form.TMJCrepitus}
              onChange={event =>
                setForm({ ...form, TMJCrepitus: event.target.value })
              }
            >
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="TMJPopping">Popping</label>
            <select
              id="TMJPopping"
              value={form.TMJPopping}
              onChange={event =>
                setForm({ ...form, TMJPopping: event.target.value })
              }
            >
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="TMJTenderness">Tenderness</label>
            <select
              id="TMJTenderness"
              value={form.TMJTenderness}
              onChange={event =>
                setForm({ ...form, TMJTenderness: event.target.value })
              }
            >
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="TMJPain">Pain</label>
            <select
              id="TMJPain"
              value={form.TMJPain}
              onChange={event =>
                setForm({ ...form, TMJPain: event.target.value })
              }
            >
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="TMJMaximumComfortableOpening">
              Maximum Comfortable opening (mm)
            </label>
            <input
              type="number"
              id="TMJMaximumComfortableOpening"
              name="TMJMaximumComfortableOpening"
              value={form.TMJMaximumComfortableOpening}
              onChange={event =>
                setForm({
                  ...form,
                  TMJMaximumComfortableOpening: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviation">Deviation</label>
            <input
              type="text"
              id="TMJDeviation"
              name="TMJDeviation"
              value={form.TMJDeviation}
              onChange={event =>
                setForm({ ...form, TMJDeviation: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviationDirection">Deviation Direction</label>
            <input
              type="text"
              id="TMJDeviationDirection"
              name="TMJDeviationDirection"
              value={form.TMJDeviationDirection}
              onChange={event =>
                setForm({
                  ...form,
                  TMJDeviationDirection: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviationAmount">Deviation Amount</label>
            <input
              type="text"
              id="TMJDeviationAmount"
              name="TMJDeviationAmount"
              value={form.TMJDeviationAmount}
              onChange={event =>
                setForm({ ...form, TMJDeviationAmount: event.target.value })
              }
            />
          </div>
        </div>

        <div className="form_group intra_oral">
          <h1>Intra Oral</h1>
          <div className="input">
            <label htmlFor="intraOralPharynx">Pharynx</label>
            <input
              type="text"
              id="intraOralPharynx"
              name="intraOralPharynx"
              value={form.intraOralPharynx}
              onChange={event =>
                setForm({ ...form, intraOralPharynx: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralTonsils">Tonsils</label>
            <input
              type="text"
              id="intraOralTonsils"
              name="intraOralTonsils"
              value={form.intraOralTonsils}
              onChange={event =>
                setForm({ ...form, intraOralTonsils: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralHardPalate">Hard Palate</label>
            <input
              type="text"
              id="intraOralHardPalate"
              name="intraOralHardPalate"
              value={form.intraOralHardPalate}
              onChange={event =>
                setForm({ ...form, intraOralHardPalate: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralSoftPalate">Soft Palate</label>
            <input
              type="text"
              id="intraOralSoftPalate"
              name="intraOralSoftPalate"
              value={form.intraOralSoftPalate}
              onChange={event =>
                setForm({ ...form, intraOralSoftPalate: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralFloorOfMouth">Floor of Mouth</label>
            <input
              type="text"
              id="intraOralFloorOfMouth"
              name="intraOralFloorOfMouth"
              value={form.intraOralFloorOfMouth}
              onChange={event =>
                setForm({
                  ...form,
                  intraOralFloorOfMouth: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralLips">Lips</label>
            <input
              type="text"
              id="intraOralLips"
              name="intraOralLips"
              value={form.intraOralLips}
              onChange={event =>
                setForm({ ...form, intraOralLips: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralTongue">Tongue</label>
            <input
              type="text"
              id="intraOralTongue"
              name="intraOralTongue"
              value={form.intraOralTongue}
              onChange={event =>
                setForm({ ...form, intraOralTongue: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralBuccalMucosa">Buccal Mucosa</label>
            <input
              type="text"
              id="intraOralBuccalMucosa"
              name="intraOralBuccalMucosa"
              value={form.intraOralBuccalMucosa}
              onChange={event =>
                setForm({
                  ...form,
                  intraOralBuccalMucosa: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralCheeks">Cheeks</label>
            <input
              type="text"
              id="intraOralCheeks"
              name="intraOralCheeks"
              value={form.intraOralCheeks}
              onChange={event =>
                setForm({ ...form, intraOralCheeks: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralOralMucosa">Oral Mucosa</label>
            <input
              type="text"
              id="intraOralOralMucosa"
              name="intraOralOralMucosa"
              value={form.intraOralOralMucosa}
              onChange={event =>
                setForm({ ...form, intraOralOralMucosa: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralCancerScreen">Oral Cancer Screen</label>
            <input
              type="text"
              id="intraOralCancerScreen"
              name="intraOralCancerScreen"
              value={form.intraOralCancerScreen}
              onChange={event =>
                setForm({
                  ...form,
                  intraOralCancerScreen: event.target.value
                })
              }
            />
          </div>
        </div>

        <div className="form_group occlusion">
          <h1>Occlusion</h1>

          <div className="input">
            <label htmlFor="occlusionClass">Class</label>
            <select
              id="occlusionClass"
              value={form.occlusionClass}
              onChange={event =>
                setForm({ ...form, occlusionClass: event.target.value })
              }
            >
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="occlusionOverbite">Overbite (%)</label>
            <input
              type="number"
              id="occlusionOverbite"
              name="occlusionOverbite"
              value={form.occlusionOverbite}
              onChange={event =>
                setForm({ ...form, occlusionOverbite: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionOverjet">Overjet (mm)</label>
            <input
              type="number"
              id="occlusionOverjet"
              name="occlusionOverjet"
              value={form.occlusionOverjet}
              onChange={event =>
                setForm({ ...form, occlusionOverjet: event.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="occlusionCrossbite">Crossbite</label>
            <input
              type="text"
              id="occlusionCrossbite"
              name="occlusionCrossbite"
              value={form.occlusionCrossbite}
              onChange={event =>
                setForm({ ...form, occlusionCrossbite: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionCrowding">Crowding</label>
            <input
              type="text"
              id="occlusionCrowding"
              name="occlusionCrowding"
              value={form.occlusionCrowding}
              onChange={event =>
                setForm({ ...form, occlusionCrowding: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionAttrition">Attrition</label>
            <input
              type="text"
              id="occlusionAttrition"
              name="occlusionAttrition"
              value={form.occlusionAttrition}
              onChange={event =>
                setForm({ ...form, occlusionAttrition: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionBruxism">Bruxism</label>
            <input
              type="text"
              id="occlusionBruxism"
              name="occlusionBruxism"
              value={form.occlusionBruxism}
              onChange={event =>
                setForm({ ...form, occlusionBruxism: event.target.value })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionErosion">Erosion</label>
            <input
              type="text"
              id="occlusionErosion"
              name="occlusionErosion"
              value={form.occlusionErosion}
              onChange={event =>
                setForm({ ...form, occlusionErosion: event.target.value })
              }
            />
          </div>
        </div>

        <div className="form_group dentures">
          <h1>Dentures</h1>

          <div className="input">
            <label htmlFor="denturesUpper">Upper</label>
            <select
              id="denturesUpper"
              value={form.denturesUpper}
              onChange={event =>
                setForm({ ...form, denturesUpper: event.target.value })
              }
            >
              <option value="None">None</option>
              <option value="Partial">Partial</option>
              <option value="Full">Full</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="denturesUpperServiceable">Upper Serviceable?</label>
            <input
              type="checkbox"
              name="denturesUpperServiceable"
              id="denturesUpperServiceable"
              value={form.denturesUpperServiceable}
              onChange={event =>
                setForm({
                  ...form,
                  denturesUpperServiceable: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="denturesLower">Lower</label>
            <select
              id="denturesLower"
              value={form.denturesLower}
              onChange={event =>
                setForm({ ...form, denturesLower: event.target.value })
              }
            >
              <option value="None">None</option>
              <option value="Partial">Partial</option>
              <option value="Full">Full</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="denturesLowerServiceable">Lower Serviceable?</label>
            <input
              type="checkbox"
              name="denturesLowerServiceable"
              id="denturesLowerServiceable"
              value={form.denturesLowerServiceable}
              onChange={event =>
                setForm({
                  ...form,
                  denturesLowerServiceable: event.target.value
                })
              }
            />
          </div>
        </div>

        <div className="form_group periodontal_assessment">
          <h1>Periodontal Assessment</h1>

          <div className="input">
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaHealth">Health</label>
              <input
                type="checkbox"
                id="periodontalAssessmentGingivaHealth"
                name="periodontalAssessmentGingivaHealth"
                value={form.periodontalAssessmentGingiva.Health}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Health: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaHypertrophic">
                Hypertrophic
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaHypertrophic"
                id="periodontalAssessmentGingivaHypertrophic"
                value={form.periodontalAssessmentGingiva.Hypertrophic}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Hypertrophic: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaHemorragic">
                Hemorragic
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaHemorragic"
                id="periodontalAssessmentGingivaHemorragic"
                value={form.periodontalAssessmentGingiva.Hemorragic}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Hemorragic: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaFibrous">
                Fibrous
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaFibrous"
                id="periodontalAssessmentGingivaFibrous"
                value={form.periodontalAssessmentGingiva.Fibrous}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Fibrous: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaEdematous">
                Edematous
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaEdematous"
                id="periodontalAssessmentGingivaEdematous"
                value={form.periodontalAssessmentGingiva.Edematous}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Edematous: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaRecession">
                Recession
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaRecession"
                id="periodontalAssessmentGingivaRecession"
                value={form.periodontalAssessmentGingiva.Recession}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Recession: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaPuss">Puss</label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaPuss"
                id="periodontalAssessmentGingivaPuss"
                value={form.periodontalAssessmentGingiva.Puss}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Puss: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaCyanotic">
                Cyanotic
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaCyanotic"
                id="periodontalAssessmentGingivaCyanotic"
                value={form.periodontalAssessmentGingiva.Cyanotic}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Cyanotic: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaUlcerated">
                Ulcerated
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaUlcerated"
                id="periodontalAssessmentGingivaUlcerated"
                value={form.periodontalAssessmentGingiva.Ulcerated}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Ulcerated: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaClefting">
                Clefting
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaClefting"
                id="periodontalAssessmentGingivaClefting"
                value={form.periodontalAssessmentGingiva.Clefting}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      Clefting: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaFrenumPull">
                Frenum Pull
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaFrenumPull"
                id="periodontalAssessmentGingivaFrenumPull"
                value={form.periodontalAssessmentGingiva.FrenumPull}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentGingiva: {
                      FrenumPull: event.target.value
                    }
                  })
                }
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentMag">Mag</label>
            <input
              type="text"
              id="periodontalAssessmentMag"
              name="periodontalAssessmentMag"
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentCalculusSub">
              Calculus Sub
            </label>

            <select
              id="periodontalAssessmentCalculusSub"
              value={form.periodontalAssessmentCalculusSub}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentCalculusSub: event.target.value
                })
              }
            >
              <option value="Abundant">Abundant</option>
              <option value="Moderate">Moderate</option>
              <option value="Scanty">Scanty</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="periodontalAssessmentCalculusSupra">
              Calculus Supra
            </label>
            <select
              id="periodontalAssessmentCalculusSupra"
              value={form.periodontalAssessmentCalculusSupra}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentCalculusSupra: event.target.value
                })
              }
            >
              <option value="Abundant">Abundant</option>
              <option value="Moderate">Moderate</option>
              <option value="Scanty">Scanty</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentOhiAids">
              Oral Hygiene Aids
            </label>
            <input
              id="periodontalAssessmentOhiAids"
              name="periodontalAssessmentOhiAids"
              value={form.periodontalAssessmentOhiAids}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentOhiAids: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentOhiFrequency">
              Oral Hygiene Frequency
            </label>
            <input
              id="periodontalAssessmentOhiFrequency"
              type="text"
              name="periodontalAssessmentOhiFrequency"
              value={form.periodontalAssessmentOhiFrequency}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentOhiFrequency: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsAge">Age</label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsAge"
                id="periodontalAssessmentRiskFactorsAge"
                value={form.periodontalAssessmentRiskFactors.Age}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      Age: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsDryMouth">
                DryMouth
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsDryMouth"
                id="periodontalAssessmentRiskFactorsDryMouth"
                value={form.periodontalAssessmentRiskFactors.DryMouth}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      DryMouth: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsSmoking">
                Smoking
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsSmoking"
                id="periodontalAssessmentRiskFactorsSmoking"
                value={form.periodontalAssessmentRiskFactors.Smoking}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      Smoking: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsHormonal">
                Hormonal
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsHormonal"
                id="periodontalAssessmentRiskFactorsHormonal"
                value={form.periodontalAssessmentRiskFactors.Hormonal}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      Hormonal: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsSupplements">
                Medication/Herbal Supplements
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsSupplements"
                id="periodontalAssessmentRiskFactorsSupplements"
                value={form.periodontalAssessmentRiskFactors.Supplements}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      Supplements: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsNutritionalHabits">
                Nutritional Habits
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsNutritionalHabits"
                id="periodontalAssessmentRiskFactorsNutritionalHabits"
                value={form.periodontalAssessmentRiskFactors.NutritionalHabits}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      NutritionalHabits: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsSystemicIllness">
                Systemic Illness
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsSystemicIllness"
                id="periodontalAssessmentRiskFactorsSystemicIllness"
                value={form.periodontalAssessmentRiskFactors.SystemicIllness}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      SystemicIllness: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsImmunoCompromised">
                Immuno Compromised
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsImmunoCompromised"
                id="periodontalAssessmentRiskFactorsImmunoCompromised"
                value={form.periodontalAssessmentRiskFactors.ImmunoCompromised}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      ImmunoCompromised: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsFamilyHistory">
                Family History
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsFamilyHistory"
                id="periodontalAssessmentRiskFactorsFamilyHistory"
                value={form.periodontalAssessmentRiskFactors.FamilyHistory}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentRiskFactorsAge: {
                      FamilyHistory: event.target.value
                    }
                  })
                }
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentExtraInformation">
              Extra Information
            </label>
            <input
              type="text"
              name="periodontalAssessmentExtraInformation"
              id="periodontalAssessmentExtraInformation"
              value={form.periodontalAssessmentRiskFactors.extraInformation}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentRiskFactorsAge: {
                    extraInformation: event.target.value
                  }
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentPerioChartDate">
              Perio Chart Date
            </label>
            <input
              type="date"
              name="periodontalAssessmentPerioChartDate"
              id="periodontalAssessmentPerioChartDate"
              value={form.periodontalAssessmentPerioChartDate}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPerioChartDate: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentGingivitis">Gingivitis</label>
            <input
              type="text"
              name="periodontalAssessmentGingivitis"
              id="periodontalAssessmentGingivitis"
              value={form.periodontalAssessmentGingivitis}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentGingivitis: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentPeriodontitis">
              Periodontitis
            </label>
            <select
              id="periodontalAssessmentPeriodontitis"
              value={form.periodontalAssessmentPeriodontitis}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPeriodontitis: event.target.value
                })
              }
            >
              <option value="None">None</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
          <h2>Prognosis</h2>
          <div className="input">
            <label htmlFor="periodontalAssessmentPrognosisMaxillary">
              Maxillary
            </label>
            <select
              id="periodontalAssessmentPrognosisMaxillary"
              value={form.periodontalAssessmentPrognosisMaxillary}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPrognosisMaxillary: event.target.value
                })
              }
            >
              <option value="Good">Good</option>
              <option value="Guarded">Guarded</option>
              <option value="Poor">Poor</option>
              <option value="Hopeless">Hopeless</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="periodontalAssessmentPrognosisMaxillaryConcerns">
              Maxillary Concerns
            </label>
            <input
              type="text"
              id="periodontalAssessmentPrognosisMaxillaryConcerns"
              name="periodontalAssessmentPrognosisMaxillaryConcerns"
              value={form.periodontalAssessmentPrognosisMaxillaryConcerns}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPrognosisMaxillaryConcerns:
                    event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="periodontalAssessmentPrognosisMandibular">
              Mandibular
            </label>
            <select
              id="periodontalAssessmentPrognosisMandibular"
              value={form.periodontalAssessmentPrognosisMandibular}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPrognosisMandibular: event.target.value
                })
              }
            >
              <option value="Good">Good</option>
              <option value="Guarded">Guarded</option>
              <option value="Poor">Poor</option>
              <option value="Hopeless">Hopeless</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="periodontalAssessmentPrognosisMandibularConcerns">
              Mandibular Concerns
            </label>
            <input
              type="text"
              id="periodontalAssessmentPrognosisMandibularConcerns"
              name="periodontalAssessmentPrognosisMandibularConcerns"
              value={form.periodontalAssessmentPrognosisMandibularConcerns}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPrognosisMandibularConcerns:
                    event.target.value
                })
              }
            />
          </div>

          <h2>Recommended Treatment</h2>
          <div className="input">
            <label htmlFor="periodontalAssessmentTreatmentScalingAppointments">
              Scaling Appointments with Anesthetic
            </label>
            <select
              id="periodontalAssessmentTreatmentScalingAppointments"
              value={form.periodontalAssessmentTreatmentScalingAppointments}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentTreatmentScalingAppointments:
                    event.target.value
                })
              }
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="">Perio Maintenance Frequency</label>
            <select
              id="periodontalAssessmentPreatmentPerioMaintance"
              value={form.periodontalAssessmentPreatmentPerioMaintance}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentPreatmentPerioMaintance:
                    event.target.value
                })
              }
            >
              <option value="3">3</option>
              <option value="4-1/2">4-1/2</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="input">
            <div className="check">
              <label htmlFor="periodontalAssessmentTreatmentHomeCareBrushing">
                Brushing
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentTreatmentHomeCareBrushing"
                id="periodontalAssessmentTreatmentHomeCareBrushing"
                value={form.periodontalAssessmentTreatmentHomeCare.Brushing}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentTreatmentHomeCare: {
                      Brushing: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentTreatmentHomeCareInterdentalCleaning">
                Interdental Cleaning
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentTreatmentHomeCareInterdentalCleaning"
                id="periodontalAssessmentTreatmentHomeCareInterdentalCleaning"
                value={
                  form.periodontalAssessmentTreatmentHomeCare
                    .InterdentalCleaning
                }
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentTreatmentHomeCare: {
                      InterdentalCleaning: event.target.value
                    }
                  })
                }
              />
            </div>
          </div>

          <div className="input">
            <p>Adjuncts</p>
            <div className="check">
              <label htmlFor="periodontalAssessmentTreatmentAdjuctsPeriostat">
                Periostat
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentTreatmentAdjuctsPeriostat"
                id="periodontalAssessmentTreatmentAdjuctsPeriostat"
                value={form.periodontalAssessmentTreatmentAdjucts.Periostat}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentTreatmentAdjucts: {
                      Periostat: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentTreatmentAdjuctsOravital">
                Oravital
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentTreatmentAdjuctsOravital"
                id="Oravital"
                value={form.periodontalAssessmentTreatmentAdjucts.Oravital}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentTreatmentAdjucts: {
                      Oravital: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentTreatmentAdjuctsArestin">
                Arestin
              </label>
              <input
                type="checkbox"
                name="periodontalAssessmentTreatmentAdjuctsArestin"
                id="periodontalAssessmentTreatmentAdjuctsArestin"
                value={form.periodontalAssessmentTreatmentAdjucts.Arestin}
                onChange={event =>
                  setForm({
                    ...form,
                    periodontalAssessmentTreatmentAdjucts: {
                      Arestin: event.target.value
                    }
                  })
                }
              />
            </div>
          </div>
          <div className="input">
            <p>Periodontist Referral</p>
            <label htmlFor="periodontalAssessmentTreatmentPeriodontistReferral">
              Referral?
            </label>
            <input
              type="checkbox"
              name="periodontalAssessmentTreatmentPeriodontistReferral"
              id="periodontalAssessmentTreatmentPeriodontistReferral"
              value={form.periodontalAssessmentTreatmentPeriodontistReferral}
              onChange={event =>
                setForm({
                  ...form,
                  periodontalAssessmentTreatmentPeriodontistReferral:
                    event.target.value
                })
              }
            />
          </div>
        </div>

        <div className="form_group radiography">
          <h1>Radiography</h1>
          <div className="input">
            <label htmlFor="radiographyWidenedPdl">Widened PDL</label>
            <input
              type="text"
              name="radiographyWidenedPdl"
              id="radiographyWidenedPdl"
              value={form.radiographyWidenedPdl}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyWidenedPdl: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyPaLesions">PA Lesions</label>
            <input
              type="text"
              name="radiographyPaLesions"
              id="radiographyPaLesions"
              value={form.radiographyPaLesions}
              onChange={event =>
                setForm({ ...form, radiographyPaLesions: event.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyBoneLossHorizontal">
              Bone Loss Horizontal
            </label>
            <input
              type="text"
              name="radiographyBoneLossHorizontal"
              id="radiographyBoneLossHorizontal"
              value={form.radiographyBoneLossHorizontal}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyBoneLossHorizontal: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyBoneLossVertical">
              Bone Loss Vertical
            </label>
            <input
              type="text"
              name="radiographyBoneLossVertical"
              id="radiographyBoneLossVertical"
              value={form.radiographyBoneLossVertical}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyBoneLossVertical: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyImpactedTeeth">Impacted Teeth</label>
            <input
              type="text"
              name="radiographyImpactedTeeth"
              id="radiographyImpactedTeeth"
              value={form.radiographyImpactedTeeth}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyImpactedTeeth: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyPoorMargins">Poor Margins</label>
            <input
              type="text"
              name="radiographyPoorMargins"
              id="radiographyPoorMargins"
              value={form.radiographyPoorMargins}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyPoorMargins: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyChartingCompletedOn">
              Charting Completed On
            </label>
            <input
              type="date"
              name="radiographyChartingCompletedOn"
              id="radiographyChartingCompletedOn"
              value={form.radiographyChartingCompletedOn}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyChartingCompletedOn: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyRecommendedPreventiveTherapy">
              Recommended Preventive Therapy
            </label>
            <input
              type="text"
              name="radiographyRecommendedPreventiveTherapy"
              id="radiographyRecommendedPreventiveTherapy"
              value={form.radiographyRecommendedPreventiveTherapy}
              onChange={event =>
                setForm({
                  ...form,
                  radiographyRecommendedPreventiveTherapy: event.target.value
                })
              }
            />
          </div>
        </div>

        <div className="form_group hard_tissue_exam">
          <h1>Hard Tissue Exam</h1>
          <div className="input">
            <label htmlFor="hardTissueExamChartingCompletedOn">
              Hard Tissue Exam Completed On
            </label>
            <input
              type="date"
              name="hardTissueExamChartingCompletedOn"
              id="hardTissueExamChartingCompletedOn"
              value={form.hardTissueExamChartingCompletedOn}
              onChange={event =>
                setForm({
                  ...form,
                  hardTissueExamChartingCompletedOn: event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="hardTissueExamCarriesRiskAssessment">
              Carries Risk Assessment
            </label>
            <select
              id="hardTissueExamCarriesRiskAssessment"
              value={form.hardTissueExamCarriesRiskAssessment}
              onChange={event =>
                setForm({
                  ...form,
                  hardTissueExamCarriesRiskAssessment: event.target.value
                })
              }
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
              <option value="extreme">extreme</option>
            </select>
          </div>
        </div>

        <div className="form_group Recommended_preventive_therapy">
          <h1>Recommended Preventive Therapy</h1>

          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapySalvaryTest">
              Salvary Test
            </label>
            <input
              type="text"
              name="RecommendedPreventiveTherapySalvaryTest"
              id="RecommendedPreventiveTherapySalvaryTest"
              value={form.RecommendedPreventiveTherapySalvaryTest}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapySalvaryTest: event.target.value
                })
              }
            />
          </div>

          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapyClorhexidineRinse">
              Chlorhexidine Rinse
            </label>
            <input
              type="text"
              name="RecommendedPreventiveTherapyClorhexidineRinse"
              id="RecommendedPreventiveTherapyClorhexidineRinse"
              value={form.RecommendedPreventiveTherapyClorhexidineRinse}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapyClorhexidineRinse:
                    event.target.value
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapyFluoride">
              Fluoride
            </label>
            <select
              id="RecommendedPreventiveTherapyFluoride"
              value={form.RecommendedPreventiveTherapyFluoride}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapyFluoride: event.target.value
                })
              }
            >
              <option>none</option>
              <option>Toothpaste</option>
              <option>Varnish</option>
              <option>Rinse</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapyRadiographs">
              Radiograph Frequency
            </label>
            <select
              id="RecommendedPreventiveTherapyRadiographs"
              value={form.RecommendedPreventiveTherapyRadiographs}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapyRadiographs: event.target.value
                })
              }
            >
              <option>18-24m</option>
              <option>12-18m</option>
              <option>6-12m</option>
              <option>every 6m</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapyExamFrequency">
              Exam Frequency
            </label>
            <select
              id="RecommendedPreventiveTherapyExamFrequency"
              value={form.RecommendedPreventiveTherapyExamFrequency}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapyExamFrequency: event.target.value
                })
              }
            >
              <option value="3m">3m</option>
              <option value="6m">6m</option>
              <option value="9m">9m</option>
              <option value="12m">12m</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="RecommendedPreventiveTherapyAdjuncts">
              Adjuncts
            </label>
            <select
              id="RecommendedPreventiveTherapyAdjuncts"
              value={form.RecommendedPreventiveTherapyAdjuncts}
              onChange={event =>
                setForm({
                  ...form,
                  RecommendedPreventiveTherapyAdjuncts: event.target.value
                })
              }
            >
              <option value="none">none</option>
              <option value="Xylitol">Xylitol</option>
              <option value="Sealants">Sealants</option>
              <option value="Baking Soda">Baking Soda</option>
            </select>
          </div>
        </div>

        <div className="form_group diagnosis">
          <h1>Diagnosis</h1>
          <div className="paired">
            <div className="input">
              <label htmlFor="diagnosisCarriesPresent">Carries Present?</label>
              <input
                type="text"
                name="diagnosisCarriesPresent"
                id="diagnosisCarriesPresent"
                value={form.diagnosisCarriesPresent}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisCarriesPresent: event.target.value
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="diagnosisCarriesInTreatmentPlan">
                Treatment Planned?
              </label>
              <input
                type="text"
                name="diagnosisCarriesInTreatmentPlan"
                id="diagnosisCarriesInTreatmentPlan"
                value={form.diagnosisCarriesInTreatmentPlan}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisCarriesInTreatmentPlan: event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="paired">
            <div className="input">
              <label htmlFor="diagnosisFailingRestorationPresent">
                Failing Restoration?
              </label>
              <input
                type="text"
                name="diagnosisFailingRestorationPresent"
                id="diagnosisFailingRestorationPresent"
                value={form.diagnosisFailingRestorationPresent}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisFailingRestorationPresent: event.target.value
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="diagnosisFailingRestorationInTreatmentPlan">
                Failing Restoration Planned?
              </label>
              <input
                type="text"
                name="diagnosisFailingRestorationInTreatmentPlan"
                id="diagnosisFailingRestorationInTreatmentPlan"
                value={form.diagnosisFailingRestorationInTreatmentPlan}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisFailingRestorationInTreatmentPlan:
                      event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="paired">
            <div className="input">
              <label htmlFor="diagnosisFailingRestorationInTreatmentPlan">
                Endodontic Present?
              </label>
              <input
                type="text"
                name="diagnosisEndodonticPresent"
                id="diagnosisEndodonticPresent"
                value={form.diagnosisEndodonticPresent}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisEndodonticPresent: event.target.value
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="diagnosisEndodonticInTreatmentPlan">
                Endodontic Planned?
              </label>
              <input
                type="text"
                name="diagnosisEndodonticInTreatmentPlan"
                id="diagnosisEndodonticInTreatmentPlan"
                value={form.diagnosisEndodonticInTreatmentPlan}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisEndodonticInTreatmentPlan: event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="paired">
            <div className="input">
              <label htmlFor="diagnosisMissingTeethPresent">
                Missing Teeth?
              </label>
              <input
                type="text"
                name="diagnosisMissingTeethPresent"
                id="diagnosisMissingTeethPresent"
                value={form.diagnosisMissingTeethPresent}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisMissingTeethPresent: event.target.value
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="diagnosisMissingTeethInTreatmentPlan">
                Replace Teeth Planned?
              </label>
              <input
                type="text"
                name="diagnosisMissingTeethInTreatmentPlan"
                id="diagnosisMissingTeethInTreatmentPlan"
                value={form.diagnosisMissingTeethInTreatmentPlan}
                onChange={event =>
                  setForm({
                    ...form,
                    diagnosisMissingTeethInTreatmentPlan: event.target.value
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddExam;
