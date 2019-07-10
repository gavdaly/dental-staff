import React from "react";

export const ShowExam = ({ exam }) => {
  return (
    <>
      <p>{exam.name}</p>
      <hr />
      <div>
        <p>
          <span>{exam.sex}</span>
          <span>appears {exam.healthAppearance}</span>
        </p>
        <p>
          <span>medical history updated on </span>
          {exam.lastMedicalHistoryUpdate}
        </p>
        <p>
          <span>ASA </span>
          {exam.asaClassification}
        </p>
        <p>
          <span>CC: </span>
          {exam.chiefComplaint}
        </p>

        <h1>Extra Oral</h1>
        <p>
          <span>Head: </span>
          {exam.extraOralHead}
        </p>
        <p>
          <span>Neck: </span>
          {exam.extraOralNeck}
        </p>
        <p>
          <span>Lymph Nodes: </span>
          {exam.extraOralLymphNodes}
        </p>
        <p>
          <span>Skin: </span>
          {exam.extraOralSkin}
        </p>

        <h1>TMJ</h1>
        <p>
          <span>Crepitus: </span>
          {exam.tmjCrepitus}
        </p>
        <p>
          <span>Popping: </span>
          {exam.tmjPopping}
        </p>
        <p>
          <span>Tenderness: </span>
          {exam.tmjPenderness}
        </p>
        <p>
          <span>Pain: </span>
          {exam.tmjPain}
        </p>
        <p>
          <span>Maximum Comfrotable opening </span>
          {exam.tmjMaximumComfortableOpening}mm
        </p>
        {exam.tmjTeviation ? (
          <>
            <p>
              <span>Deviation Direction: </span>
              {exam.tmjDeviationDirection}
            </p>
            <p>
              <span>Devation Amount: </span>
              {exam.tmjDeviationAmount}
            </p>{" "}
          </>
        ) : (
          <p>Deviation: none</p>
        )}
        <h1>Intra Oral</h1>
        <p>
          <span>Pharynx: </span>
          {exam.intraoralPharynx}
        </p>
        <p>
          <span>Tonsils: </span>
          {exam.intraoralPonsils}
        </p>
        <p>
          <span>Hard Palate: </span>
          {exam.intraoralHardPalate}
        </p>
        <p>
          <span>Soft Palate: </span>
          {exam.intraoralSoftPalate}
        </p>
        <p>
          <span>Floor of Mouth: </span>
          {exam.intraoralFloorOfMouth}
        </p>
        <p>
          <span>Lips: </span>
          {exam.intraoralLips}
        </p>
        <p>
          <span>Tongue: </span>
          {exam.intraoralTongue}
        </p>
        <p>
          <span>Buccal Mucosa: </span>
          {exam.intraoralBuccalMucosa}
        </p>
        <p>
          <span>Cheeks: </span>
          {exam.intraoralCheeks}
        </p>
        <p>
          <span>Oral Mucosa: </span>
          {exam.intraoralOralMucosa}
        </p>
        <p>
          <span>Oral Cancer Screen: </span>
          {exam.intraoralOralCancerScreen}
        </p>

        <h1>Occlusion</h1>
        <p>
          <span>Class: </span>
          {exam.occlusionClass}
        </p>
        <p>
          <span>Overbite: </span>
          {exam.occlusionOverbite}%
        </p>
        <p>
          <span>Overjet: </span>
          {exam.occlusionOverjet}mm
        </p>
        <p>
          <span>Crossbite: </span>
          {exam.occlusionCrossbite}
        </p>
        <p>
          <span>Crowding: </span>
          {exam.occlusionCrowding}
        </p>
        <p>
          <span>Attrition: </span>
          {exam.occlusionAttrition}
        </p>
        <p>
          <span>Bruxism: </span>
          {exam.occlusionBruxism}
        </p>
        <p>
          <span>Erosion: </span>
          {exam.occlusionErosion}
        </p>

        <h1>Dentures</h1>
        <p>
          {exam.denturesUpper === "Full" && (
            <>
              {exam.denturesUpperServiceable
                ? "CUD is servicable"
                : "CUD is not servicable"}
            </>
          )}

          {exam.denturesUpper === "Partial" && (
            <>
              {exam.denturesUpperServiceable
                ? "PUD is servicable"
                : "PUD is not servicable"}
            </>
          )}

          {exam.denturesUpper === "none" && <>dose not have upper dentures</>}
        </p>

        <p>
          {exam.denturesLower === "Full" && (
            <>
              {exam.denturesLowerServiceable
                ? "CLD is servicable"
                : "CLD is not servicable"}
            </>
          )}

          {exam.denturesLower === "Partial" && (
            <>
              {exam.denturesUowerServiceable
                ? "PLD is servicable"
                : "PLD is not servicable"}
            </>
          )}
          {exam.denturesLower === "none" && <>dose not have lower dentures</>}
        </p>

        <h1>Periodontal Assessment</h1>
        <p>
          <span>Gingiva: </span>
          {exam.periodontalAssessmentGingiva}
        </p>
        <p>
          <span>Mag: </span>
          {exam.periodontalAssessmentMag}
        </p>
        <p>
          <span>Calculus Sub: </span>
          {exam.periodontalAssessmentCalculusSub}
        </p>
        <p>
          <span>Calculus Supra: </span>
          {exam.periodontalAsessmentCalculusSupra}
        </p>
        <p>
          <span>Oral Hyigene Aids: </span>
          {exam.periodontalAssessmentOhiAids}
        </p>
        <p>
          <span>Oral Hyigene Frequency: </span>
          {exam.periodontalAssessmentOhiFrequency}
        </p>
        <p>
          <span>Risk Factors: </span>
          {exam.periodontalAssessmentRiskFactors}
        </p>
        <p>
          <span>Extra Information: </span>
          {exam.periodontalAssessmentExtraInformation}
        </p>
        <p>
          <span>Perio Chart Date: </span>
          {exam.periodontalAssessmentPerioChartDate}
        </p>
        <p>
          <span>Gingivitis: </span>
          {exam.periodontalAssessmentGingivitis}
        </p>
        <p>
          <span>Periodontitis: </span>
          {exam.periodontalAssessmentPeriodontitis}
        </p>

        <h2>Prognosis</h2>
        <p>
          <span>Maxillary: </span>
          {exam.periodontalAssessmentPrognosisMaxillary}
        </p>
        <p>
          <span>Maxillary Concerns: </span>
          {exam.periodontalAssessmentPrognosisMaxillaryConcerns}
        </p>
        <p>
          <span>Mandibular: </span>
          {exam.periodontalAssessmentPrognosisMandibular}
        </p>
        <p>
          <span>Mandibular Concerns: </span>
          {exam.periodontalAssessmentPrognosisMandibularConcerns}
        </p>

        <h2>Recomended Treatment</h2>
        <p>
          <span>Scaling Appointments with Anestitic: </span>
          {exam.periodontalAssessmentTreatmentScalingAppointments}
        </p>
        <p>
          <span>Periomaintance Frequency: </span>
          {exam.periodontalAssessmentTreatmentPeriomaintance}
        </p>
        <p>
          <span>Home Care: </span>
          {exam.periodontalAssessmentTreatmentHomeCare}
        </p>
        <p>
          <span>Adjucts: </span>
          {exam.periodontalAssessmentTreatmentAdjucts}
        </p>
        <p>
          <span>Periodontist Referral: </span>
          {exam.periodontalAssessmentTreatmentPeriodontistReferral}
        </p>

        <h1>Radiography</h1>
        <p>
          <span>Widened PDL: </span>
          {exam.radiographyWidenedPdl}
        </p>
        <p>
          <span>PA Lesions: </span>
          {exam.radiographyPaLesions}
        </p>
        <p>
          <span>Bone Loss Horizontal: </span>
          {exam.radiographyBoneLossHorizontal}
        </p>
        <p>
          <span>Bone Loss Vertical: </span>
          {exam.radiographyBoneLossVertical}
        </p>
        <p>
          <span>Impacted Teeth: </span>
          {exam.radiographyImpactedTeeth}
        </p>
        <p>
          <span>Poor Margins: </span>
          {exam.radiographyPoorMargins}
        </p>
        <p>
          <span>Chart Completed On: </span>
          {exam.radiographyChartingCompletedOn}
        </p>
        <p>
          <span>Recomended Preventive Thearpy: </span>
          {exam.radiographyRecomendedPreventiveThearpy}
        </p>

        <h1>Hard Tissue Exam</h1>
        <p>
          <span>Hard Tissue Exam Completed On: </span>
          {exam.hardTissueExamChartingCompletedOn}
        </p>
        <p>
          <span>Carries Risk Assessment: </span>
          {exam.hardTissueExamCarriesRiskAssessment}
        </p>

        <h1>Recomended Preventive Thearpy</h1>
        <p>
          <span>Salvary Test: </span>
          {exam.recomendedPreventiveThearpySalvaryTest}
        </p>
        <p>
          <span>Chlorhexidine Rinse: </span>
          {exam.recomendedPreventiveThearpyClorhexidineRinse}
        </p>
        <p>
          <span>Flouride: </span>
          {exam.recomendedPreventiveThearpyFlouride}
        </p>
        <p>
          <span>Radiograph Frequency: </span>
          {exam.recomendedPreventiveThearpyRadiographs}
        </p>
        <p>
          <span>Exam Frequency: </span>
          {exam.recomendedPreventiveThearpyExamFrequency}
        </p>
        <p>
          <span>Adjuncts: </span>
          {exam.recomendedPreventiveThearpyAdjuncts}
        </p>

        <h1>Diagnosis</h1>

        {exam.diagnosisCarriesPresent && (
          <p>
            <span>Carries present and </span>
            {exam.diagnosisCarriesInTreatmentPlan
              ? "treatment planned"
              : "not treatement planned"}
          </p>
        )}

        {!exam.diagnosisCarriesPresent && <p>Carries not present</p>}

        {exam.diagnosisFailingRestorationPresent && (
          <p>
            <span>Failing restorations present and </span>
            {!exam.diagnosisFailingRestorationInTreatmentPlan && (
              <span>not</span>
            )}
            <span>treatment planned</span>
          </p>
        )}

        {!exam.diagnosisFailingRestorationPresent && (
          <p>Failing restorations not present</p>
        )}

        {exam.diagnosisEndodonticPresent && (
          <p>
            <span>Endodontic present and </span>
            {!exam.diagnosisEndodonticInTreatmentPlan && <span>not</span>}
            <span> treatment planned</span>
          </p>
        )}

        {!exam.diagnosisEndodonticPresent && <p>Endodontic not present</p>}

        {exam.diagnosisMissingTeethPresent && (
          <p>
            <span>patient has missing teeth </span>

            {exam.diagnosisMissingTeethInTreatmentPlan ? (
              <span>and a treatment plan has been made</span>
            ) : (
              <span>and a treatment plan has not been made</span>
            )}
          </p>
        )}
      </div>
    </>
  );
};
