import React from "react";

export const AddExam = () => {
  return (
    <form onSubmit={e => console.log(e)}>
      <div className="coe form-inputs">
        <div className="form_group">
          <div className="input">
            <label for="name">Patient Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="patient name"
            />
          </div>

          <div className="input">
            <label for="health_appearance">Health Appearance</label>
            <select id="health_appearance">
              <option value="Healthy">Healthy</option>
              <option value="Poor Health">Poor Health</option>
            </select>
          </div>
          <div className="input">
            <label for="sex">Sex</label>
            <select id="sex">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div className="input">
            <label for="lastMedicalHistoryUpdate">
              Last Medical History Update
            </label>
            <input
              type="date"
              id="lastMedicalHistoryUpdate"
              name="lastMedicalHistoryUpdate"
            />
          </div>

          <div className="input">
            <label for="ASAClassification">ASA Classification</label>
            <select id="ASAClassification">
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>

          <div className="input">
            <label for="chiefComplaint">Chief Complaint</label>
            <input type="text" id="chiefComplaint" name="chiefComplaint" />
          </div>
        </div>

        <div className="form_group extra_oral">
          <h2>Extra Oral</h2>

          <div className="input">
            <label htmlFor="extraOralHead">Head</label>
            <input type="text" id="extraOralHead" name="extraOralHead" />
          </div>

          <div className="input">
            <label htmlFor="extraOralNeck">Neck</label>
            <input type="text" name="extraOralNeck" id="extraOralNeck" />
          </div>

          <div className="input">
            <label htmlFor="extraOralLymphNodes">Lymph Nodes</label>
            <input
              type="text"
              name="extraOralLymphNodes"
              id="extraOralLymphNodes"
            />
          </div>

          <div className="input">
            <label for="extraOralSkin">Skin</label>
            <input type="text" name="extraOralSkin" id="extraOralSkin" />
          </div>

          <h1>TMJ</h1>
          <div className="input">
            <label for="TMJCrepitus">Crepitus</label>
            <select id="TMJCrepitus">
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label for="TMJPopping">Popping</label>
            <select id="PMJPopping">
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label for="TMJTenderness">Tenderness</label>
            <select id="TMJTenderness">
              <option value="None">none</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input">
            <label for="TMJPain">Pain</label>
            <select id="PMJPain">
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
            />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviation">Deviation</label>
            <input type="text" id="TMJDeviation" name="TMJDeviation" />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviationDirection">Deviation Direction</label>
            <input
              type="text"
              id="TMJDeviationDirection"
              name="TMJDeviationDirection"
            />
          </div>

          <div className="input">
            <label htmlFor="TMJDeviationAmount">Deviation Amount</label>
            <input
              type="text"
              id="TMJDeviationAmount"
              name="TMJDeviationAmount"
            />
          </div>
        </div>

        <div className="form_group intra_oral">
          <h1>Intra Oral</h1>
          <div className="input">
            <label htmlFor="intraOralPharynx">Pharynx</label>
            <input type="text" id="intraOralPharynx" name="intraOralPharynx" />
          </div>

          <div className="input">
            <label htmlFor="intraOralTonsils">Tonsils</label>
            <input type="text" id="intraOralTonsils" name="intraOralTonsils" />
          </div>

          <div className="input">
            <label htmlFor="intraOralHardPalate">Hard Palate</label>
            <input
              type="text"
              id="intraOralHardPalate"
              name="intraOralHardPalate"
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralSoftPalate">Soft Palate</label>
            <input
              type="text"
              id="intraOralSoftPalate"
              name="intraOralSoftPalate"
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralFloorOfMouth">Floor of Mouth</label>
            <input
              type="text"
              id="intraOralFloorOfMouth"
              name="intraOralFloorOfMouth"
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralLips">Lips</label>
            <input type="text" id="intraOralLips" name="intraOralLips" />
          </div>

          <div className="input">
            <label htmlFor="intraOralTongue">Tongue</label>
            <input type="text" id="intraOralTongue" name="intraOralTongue" />
          </div>

          <div className="input">
            <label htmlFor="intraOralBuccalMucosa">Buccal Mucosa</label>
            <input
              type="text"
              id="intraOralBuccalMucosa"
              name="intraOralBuccalMucosa"
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralCheeks">Cheeks</label>
            <input type="text" id="intraOralCheeks" name="intraOralCheeks" />
          </div>

          <div className="input">
            <label htmlFor="intraOralOralMucosa">Oral Mucosa</label>
            <input
              type="text"
              id="intraOralOralMucosa"
              name="intraOralOralMucosa"
            />
          </div>

          <div className="input">
            <label htmlFor="intraOralCancerScreen">Oral Cancer Screen</label>
            <input
              type="text"
              id="intraOralCancerScreen"
              name="intraOralCancerScreen"
            />
          </div>
        </div>

        <div className="form_group occlusion">
          <h1>Occlusion</h1>

          <div className="input">
            <label for="occlusionClass">Class</label>
            <select id="occlusionClass">
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
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionOverjet">Overjet (mm)</label>
            <input
              type="number"
              id="occlusionOverjet"
              name="occlusionOverjet"
            />
          </div>
          <div className="input">
            <label htmlFor="occlusionCrossbite">Crossbite</label>
            <input
              type="text"
              id="occlusionCrossbite"
              name="occlusionCrossbite"
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionCrowding">Crowding</label>
            <input
              type="text"
              id="occlusionCrowding"
              name="occlusionCrowding"
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionAttrition">Attrition</label>
            <input
              type="text"
              id="occlusionAttrition"
              name="occlusionAttrition"
            />
          </div>

          <div className="input">
            <label htmlFor="occlusionBruxism">Bruxism</label>
            <input type="text" id="occlusionBruxism" name="occlusionBruxism" />
          </div>

          <div className="input">
            <label htmlFor="occlusionErosion">Erosion</label>
            <input type="text" id="occlusionErosion" name="occlusionErosion" />
          </div>
        </div>

        <div className="form_group dentures">
          <h1>Dentures</h1>

          <div className="input">
            <label for="denturesUpper">Upper</label>
            <select id="denturesUpper">
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
            />
          </div>

          <div className="input">
            <label for="denturesLower">Lower</label>
            <select id="denturesLower">
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
              />
            </div>
            <div className="check">
              <label htmlFor="periodontalAssessmentGingivaPuss">Puss</label>
              <input
                type="checkbox"
                name="periodontalAssessmentGingivaPuss"
                id="periodontalAssessmentGingivaPuss"
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
              />
            </div>
          </div>

          <div className="in">
            <label htmlFor="periodontalAssessmentMag">Mag</label>
            <input
              type="text"
              id="periodontalAssessmentMag"
              name="periodontalAssessmentMag"
            />
          </div>

          <div className="input">
            <label for="periodontalAssessmentCalculusSub">Calculus Sub</label>
            <select id="periodontalAssessmentCalculusSub">
              <option value="Abundant">Abundant</option>
              <option value="Moderate">Moderate</option>
              <option value="Scanty">Scanty</option>
            </select>
          </div>
          <div className="input">
            <label for="periodontalAsessmentCalculusSupra">
              Calculus Supra
            </label>
            <select id="periodontalAsessmentCalculusSupra">
              <option value="Abundant">Abundant</option>
              <option value="Moderate">Moderate</option>
              <option value="Scanty">Scanty</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentOhiAids">
              Oral Hyigene Aids
            </label>
            <input
              id="periodontalAssessmentOhiAids"
              name="periodontalAssessmentOhiAids"
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentOhiFrequency">
              Oral Hyigene Frequency
            </label>
            <input
              id="periodontalAssessmentOhiFrequency"
              type="text"
              name="periodontalAssessmentOhiFrequency"
            />
          </div>

          <div className="input">
            <div className="check">
              <label htmlFor="periodontalAssessmentRiskFactorsAge">Age</label>
              <input
                type="checkbox"
                name="periodontalAssessmentRiskFactorsAge"
                id="periodontalAssessmentRiskFactorsAge"
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
            />
          </div>

          <div className="input">
            <label htmlFor="periodontalAssessmentGingivitis">Gingivitis</label>
            <input
              type="text"
              name="periodontalAssessmentGingivitis"
              id="periodontalAssessmentGingivitis"
            />
          </div>

          <div className="input">
            <label for="periodontalAssessmentPeriodontitis">
              Periodontitis
            </label>
            <select id="periodontalAssessmentPeriodontitis">
              <option value="None">None</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
          <h2>Prognosis</h2>
          <div className="input">
            <label for="periodontalAssessmentPrognosisMaxillary">
              Maxillary
            </label>
            <select id="periodontalAssessmentPrognosisMaxillary">
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
            />
          </div>
          <div className="input">
            <label for="periodontalAssessmentPrognosisMandibular">
              Mandibular
            </label>
            <select id="periodontalAssessmentPrognosisMandibular">
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
            />
          </div>

          <h2>Recomended Treatment</h2>
          <div className="input">
            <label for="periodontalAssessmentTreatmentScalingAppointments">
              Scaling Appointments with Anestitic
            </label>
            <select id="periodontalAssessmentTreatmentScalingAppointments">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="input">
            <label for="">Perio Maintance Frequency</label>
            <select id="periodontalAssessmentPreatmentPerioMaintance">
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
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyradiographyPaLesions">PA Lesions</label>
            <input
              type="text"
              name="radiographyPaLesions"
              id="radiographyPaLesions"
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
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyImpactedTeeth">Impacted Teeth</label>
            <input
              type="text"
              name="radiographyImpactedTeeth"
              id="radiographyImpactedTeeth"
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyPoorMargins">Poor Margins</label>
            <input
              type="text"
              name="radiographyPoorMargins"
              id="radiographyPoorMargins"
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
            />
          </div>
          <div className="input">
            <label htmlFor="radiographyRecomendedPreventiveThearpy">
              Recomended Preventive Thearpy
            </label>
            <input
              type="text"
              name="radiographyRecomendedPreventiveThearpy"
              id="radiographyRecomendedPreventiveThearpy"
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
            />
          </div>
          <div className="input">
            <label for="">Carries Risk Assessment</label>
            <select id="hard_tissue_exam_carries_risk_assessment">
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
              <option value="extreme">extreme</option>
            </select>
          </div>
        </div>

        <div className="form_group recomended_preventive_thearpy">
          <h1>Recomended Preventive Thearpy</h1>

          <div className="input">
            <label htmlFor="recomendedPreventiveThearpySalvaryTest">
              Salvary Test
            </label>
            <input
              type="text"
              name="recomendedPreventiveThearpySalvaryTest"
              id="recomendedPreventiveThearpySalvaryTest"
            />
          </div>

          <div className="input">
            <label htmlFor="recomendedPreventiveThearpyClorhexidineRinse">
              Chlorhexidine Rinse
            </label>
            <input
              type="text"
              name="recomendedPreventiveThearpyClorhexidineRinse"
              id="recomendedPreventiveThearpyClorhexidineRinse"
            />
          </div>
          <div className="input">
            <label for="recomendedPreventiveThearpyFlouride">Flouride</label>
            <select id="recomendedPreventiveThearpyFlouride">
              <option>none</option>
              <option>Toothpaste</option>
              <option>Varnish</option>
              <option>Rinse</option>
            </select>
          </div>
          <div className="input">
            <label for="recomendedPreventiveThearpyRadiographs">
              Radiograph Frequency
            </label>
            <select id="recomendedPreventiveThearpyRadiographs">
              <option>18-24m</option>
              <option>12-18m</option>
              <option>6-12m</option>
              <option>every 6m</option>
            </select>
          </div>
          <div className="input">
            <label for="recomendedPreventiveThearpyExamFrequency">
              Exam Frequency
            </label>
            <select id="recomendedPreventiveThearpyExamFrequency">
              <option value="3m">3m</option>
              <option value="6m">6m</option>
              <option value="9m">9m</option>
              <option value="12m">12m</option>
            </select>
          </div>
          <div className="input">
            <label for="recomendedPreventiveThearpyAdjuncts">Adjuncts</label>
            <select id="recomendedPreventiveThearpyAdjuncts">
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
              />
            </div>
          </div>
          <div className="paired">
            <div className="input">
              <label htmlFor="diagnosisEndodonticPresent">
                Endodontic Present?
              </label>
              <input
                type="text"
                name="diagnosisEndodonticPresent"
                id="diagnosisEndodonticPresent"
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
