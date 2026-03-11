// ===== Assignment Data Pools =====
const assignments = {
  day: [
    { task: 'School Zone Patrol', location: 'Lincoln Elementary & 3rd St',
      report: 'Dispatched to monitor traffic flow during morning drop-off hours. Multiple vehicles observed ignoring the posted 15 mph zone. Two drivers issued warnings after nearly striking a crossing guard.',
      resolution: 'Maintained visible presence for the duration of drop-off. Issued 3 citations for speed violations and 1 for failure to stop at crosswalk. Crossing guard confirmed conditions improved. Recommended permanent speed camera installation.' },
    { task: 'Community Outreach Event', location: 'Blackwater Town Hall',
      report: 'Assigned to represent Precinct 7 at the quarterly community safety forum. Residents raised concerns about increased property crime in the Riverside neighborhood and poor street lighting along Dock Row.',
      resolution: 'Logged all citizen concerns for the watch commander. Distributed 45 home security information packets. Coordinated with Public Works to submit a lighting upgrade request for Dock Row.' },
    { task: 'Traffic Enforcement', location: 'Harbor Blvd & Main St',
      report: 'Set up speed enforcement detail at the Harbor Blvd intersection following multiple accident reports this month. Radar confirmed consistent speeds of 20+ mph over the posted limit during peak hours.',
      resolution: 'Conducted enforcement for 3 hours. Issued 7 speeding citations and 2 warnings. One driver found with a suspended license — vehicle impounded. Data forwarded to traffic division for signal timing review.' },
    { task: 'Welfare Check - Elderly Resident', location: '42 Elm Grove Ln',
      report: 'Neighbor called in concern for Mrs. Eleanor Graves, 82, who had not been seen in 3 days and was not answering her phone. Mail observed piling up at front door.',
      resolution: 'Made contact with Mrs. Graves through side window — she had fallen and was unable to reach the phone. EMS dispatched and transported her to Blackwater General with a fractured hip. Neighbor notified and family contacted.' },
    { task: 'Shoplifting Report', location: 'Riverside Market Plaza',
      report: 'Store manager reported a male suspect concealing merchandise inside a backpack. Security footage confirmed the individual pocketed approximately $120 in electronics accessories before attempting to exit.',
      resolution: 'Suspect detained by store security prior to arrival. Identified as Kyle Mathers, 24, with two prior theft charges. Merchandise recovered in full. Suspect arrested and transported to Precinct 7 for processing.' },
    { task: 'Parking Violation Sweep', location: 'Downtown District',
      report: 'Conducted scheduled parking enforcement through the downtown core. Multiple vehicles found in expired meter zones and two blocking fire hydrant access on Commerce Row.',
      resolution: 'Issued 14 parking citations total. Two vehicles blocking hydrants were towed by municipal services. Business owners on Commerce Row thanked for their cooperation during the sweep.' },
    { task: 'Witness Statement - Break-in', location: 'Precinct 7 - Room 2A',
      report: 'Scheduled interview with witness Diana Reyes regarding the January 28th break-in at Hargrove Electronics on 5th Ave. Witness reported seeing two individuals in dark clothing forcing entry through the rear loading dock around 02:30.',
      resolution: 'Full statement recorded and signed. Witness provided a partial plate number matching a vehicle flagged in a prior incident. Information forwarded to detectives handling Case #BW-4102.' },
    { task: 'Patrol - Business District', location: 'Commerce Row & 8th Ave',
      report: 'Routine patrol through the business district during operating hours. Checked in with shop owners and monitored foot traffic. One report of a panhandler aggressively soliciting customers near the bank entrance.',
      resolution: 'Located the individual and issued a verbal warning. Subject moved along without incident. Completed full patrol loop — no further issues reported by merchants.' },
    { task: 'Court Escort Duty', location: 'Blackwater County Courthouse',
      report: 'Assigned to escort detained suspect Marcus Bell from Precinct 7 holding to Courtroom 4 for arraignment hearing. Bell is charged with aggravated assault and has a documented history of flight attempts.',
      resolution: 'Suspect transported and escorted without incident. Remained in courtroom for duration of hearing. Bell remanded to county jail pending trial. Transport completed with full chain of custody documentation.' },
    { task: 'Accident Report Filing', location: 'Precinct 7 - Desk',
      report: 'Completing documentation for a two-vehicle collision that occurred at the intersection of Birch St and Route 7 during yesterday\'s evening shift. One driver treated for minor whiplash at the scene.',
      resolution: 'Report finalized and filed under Case #BW-4389. Insurance information exchanged between both parties at the scene. No citations issued — wet road conditions determined as contributing factor.' },
    { task: 'Noise Complaint Follow-up', location: '17 Birch St',
      report: 'Third noise complaint this week from residents at 15 and 19 Birch St regarding loud music and shouting from the property at #17. Previous visits resulted in verbal warnings with no lasting compliance.',
      resolution: 'Made contact with tenant. Issued a formal noise violation citation. Informed tenant that further violations will result in a court summons. Neighbors notified of the action taken.' },
    { task: 'Stolen Vehicle Report', location: 'Precinct 7 - Room 3B',
      report: 'Vehicle owner Thomas Crane reported his 2019 gray Honda Civic stolen from his driveway overnight. Vehicle was locked and keys accounted for. No security cameras on the property, but a neighbor\'s Ring doorbell may have captured activity.',
      resolution: 'Report filed and vehicle entered into the stolen vehicle database. Neighbor\'s footage requested — shows two individuals approaching the vehicle at 03:12. Images forwarded to detectives for enhancement.' }
  ],
  swing: [
    { task: 'Bar District Patrol', location: 'Neon Row & 6th Ave',
      report: 'Assigned to foot patrol through the bar district during peak evening hours. Several establishments at capacity. One altercation reported outside The Blind Tiger between two patrons.',
      resolution: 'Arrived on scene and separated the individuals. Both parties had minor injuries but declined medical attention. One patron identified as the aggressor and issued a disorderly conduct citation. Bar staff cooperated fully.' },
    { task: 'Domestic Disturbance Response', location: '88 Greystone Apartments',
      report: 'Dispatched to unit 4C following a 911 call from a neighbor reporting screaming and sounds of breaking glass. Upon arrival, a male and female were found in a heated verbal argument. No visible injuries observed on either party.',
      resolution: 'Separated both individuals and conducted interviews. Female resident stated the argument was verbal only and did not wish to press charges. Male voluntarily left the premises for the evening. Incident documented and filed.' },
    { task: 'Suspicious Vehicle Report', location: 'Industrial Park - Lot C',
      report: 'Security guard at the industrial park reported a dark sedan with tinted windows parked in Lot C for over 6 hours. Vehicle was not associated with any registered business tenant. Engine was observed running intermittently.',
      resolution: 'Approached the vehicle and made contact with the occupant, who identified himself and stated he was waiting for a friend. Background check revealed no warrants. Vehicle and plate documented. Subject advised to move along.' },
    { task: 'DUI Checkpoint Setup', location: 'River Bridge & Harbor Blvd',
      report: 'Participated in scheduled DUI checkpoint operation at the River Bridge approach. High traffic volume observed as expected for a Friday evening. Multiple drivers showed signs of impairment during initial screening.',
      resolution: 'Checkpoint operational for 4 hours. 87 vehicles screened. 3 drivers arrested for DUI, 1 driver found with outstanding warrant. All arrests processed without incident. Checkpoint cleared by end of shift.' },
    { task: 'Assault Investigation', location: 'Blackwater General Hospital',
      report: 'Responded to the emergency room to take a statement from victim Raymond Cole, 34, who was assaulted outside a gas station on Route 7. Victim sustained a broken nose and lacerations. Claims he was attacked by two unknown males after a road rage incident.',
      resolution: 'Statement recorded. Gas station security footage obtained showing the altercation and the suspects\' vehicle — a red pickup truck with partial plate. Case assigned to Detective Marsh for follow-up investigation.' },
    { task: 'Vandalism Report', location: 'Old Mill Park',
      report: 'Parks department reported extensive graffiti on the Old Mill Park pavilion and damage to three park benches. Spray paint tags do not match known local crews. Damage estimated at approximately $2,500.',
      resolution: 'Scene photographed and evidence collected including discarded spray paint cans. Canvassed nearby homes — one resident has security footage being reviewed. Report filed and forwarded to property crimes unit.' },
    { task: 'Missing Person Follow-up', location: 'Precinct 7 - CID Office',
      report: 'Follow-up on the disappearance of Angela Torres, 28, reported missing 72 hours ago by her roommate. Last seen leaving her workplace at Blackwater Medical Center. Phone last pinged near the waterfront district.',
      resolution: 'Coordinated with CID detectives to review new cell tower data. Identified a pattern of movement toward the ferry terminal. Coast Guard notified and ferry surveillance footage requested. Case remains active — elevated to priority status.' },
    { task: 'Noise Complaint - Live Music', location: 'The Rusty Anchor Bar',
      report: 'Multiple residents on 5th Ave called in noise complaints regarding amplified live music from The Rusty Anchor exceeding permitted decibel levels. This is the second complaint this month against the establishment.',
      resolution: 'Measured noise levels at 94 dB from the property line — well above the 75 dB evening limit. Manager instructed to reduce volume immediately. Formal citation issued. Notified licensing board of repeated violations.' },
    { task: 'Foot Patrol - Transit Hub', location: 'Blackwater Central Station',
      report: 'Assigned to high-visibility foot patrol through the central transit station during evening rush. Reports of pickpocketing have increased 40% this quarter. Two plainclothes officers also deployed in the area.',
      resolution: 'Maintained patrol for 3 hours. One suspect observed attempting to access a commuter\'s bag — detained and identified as a repeat offender. Arrested and transported to Precinct 7. Stolen wallet recovered and returned to the victim.' },
    { task: 'Evidence Pickup', location: 'Forensics Lab - Building D',
      report: 'Tasked with secure transport of processed evidence from the forensics lab back to Precinct 7 evidence room. Items relate to the ongoing Harbor District arson investigation, Case #BW-4201.',
      resolution: 'Evidence package signed out from Lab Tech Simmons at 16:45. Chain of custody forms completed. All items logged into Evidence Room B by 17:30. No discrepancies noted in the inventory check.' },
    { task: 'Trespassing Report', location: 'Abandoned Cannery - Dock 9',
      report: 'Port authority security reported lights and movement inside the abandoned Bayside Cannery, which has been condemned since 2024. Multiple points of forced entry identified along the east wall.',
      resolution: 'Cleared the building with backup. Found evidence of recent occupation — sleeping bags, food containers, and a portable generator. No individuals located on site. Building secured and owner notified to board entry points. Area flagged for increased patrol.' },
    { task: 'Warrant Service Assist', location: '55 Ashford Terrace',
      report: 'Assisted the warrant unit in serving an arrest warrant on Daniel Voss, wanted for failure to appear on felony fraud charges. Intelligence indicated Voss was residing at the Ashford Terrace address with a female companion.',
      resolution: 'Secured the perimeter while the warrant team made entry. Voss was found in an upstairs bedroom and taken into custody without resistance. Female companion interviewed and released. Voss transported to county booking.' }
  ],
  night: [
    { task: 'Patrol - Waterfront District', location: 'Dock Row & 5th Ave',
      report: 'Night patrol through the waterfront area. The docks are largely deserted after midnight, making them a frequent target for break-ins and illegal dumping. Two commercial fishing vessels reported suspicious activity near their berths last week.',
      resolution: 'Completed three full patrol sweeps between 22:00 and 04:00. No suspicious activity observed. Checked all warehouse access points — all secure. Filed routine patrol report and recommended continued nightly coverage.' },
    { task: 'Burglary Alarm Response', location: 'First National Bank - Branch 3',
      report: 'Silent alarm triggered at 01:47 at the First National Bank branch on Commerce Row. Alarm company confirmed the alert originated from the rear service entrance sensor. No authorized personnel scheduled on site.',
      resolution: 'Arrived on scene in 4 minutes with backup. Perimeter secured. Entry point inspected — found a raccoon had triggered the motion sensor near the dumpster area. Interior verified clear via security cameras. Alarm reset and bank manager notified.' },
    { task: 'Witness Interview - Martinez Case', location: 'Precinct 7 - Room 3B',
      report: 'Scheduled late interview with dock worker Sam Hutchins regarding the Martinez disappearance. Hutchins works the overnight loading shift and claims to have seen an unfamiliar vehicle parked near Warehouse 8 on the night in question.',
      resolution: 'Interview recorded. Hutchins described a dark blue van with commercial plates, possibly a rental. Time estimate places the sighting at approximately 23:45. Description forwarded to detectives — cross-referencing with rental agency records.' },
    { task: 'Evidence Review - Harbor Theft', location: 'Evidence Room B',
      report: 'Reviewing physical evidence collected from the Harbor District cargo theft, Case #BW-4201. Approximately $45,000 in electronics were taken from a shipping container. Bolt cutters and a partial footprint were recovered at the scene.',
      resolution: 'Cataloged and photographed all evidence items. Footprint cast matches a size 11 work boot consistent with brands sold at three local retailers. Compiled evidence summary report for the lead detective\'s morning briefing.' },
    { task: 'Surveillance Detail', location: 'Warehouse 14 - Port District',
      report: 'Posted on surveillance at Warehouse 14 based on intelligence suggesting it may be used as a staging point for stolen goods. Narcotics unit also has interest in the location due to suspected drug activity.',
      resolution: 'Maintained observation for 5 hours from an unmarked vehicle. One vehicle arrived at 02:15, remained for 12 minutes, then departed. Plate recorded and photos taken. Activity log submitted to both property crimes and narcotics units.' },
    { task: 'Suspicious Activity Report', location: 'Greystone Alley & 2nd St',
      report: 'Anonymous tip reported individuals conducting what appeared to be hand-to-hand transactions in the alley behind 2nd St between midnight and 02:00. The alley has been a known trouble spot for months.',
      resolution: 'Conducted a drive-by and then foot approach. Found three individuals who scattered upon seeing the patrol. One discarded a small bag containing an unknown substance — collected and bagged for testing. Area documented for narcotics follow-up.' },
    { task: 'Patrol - Residential Sector', location: 'Oakwood Heights',
      report: 'Overnight patrol through the Oakwood Heights neighborhood following a string of vehicle break-ins reported over the past two weeks. Residents have organized a neighborhood watch but requested increased police presence.',
      resolution: 'Patrolled all streets in the subdivision between 23:00 and 03:00. Observed one individual checking car door handles on Maple Court — individual fled on foot. Partial description obtained. Increased patrol recommended for the next two weeks.' },
    { task: 'Report Filing - Weekly Summary', location: 'Precinct 7 - Desk',
      report: 'Compiling the weekly patrol summary for the night watch covering the past 7 days. Summary includes incident counts, response times, notable arrests, and patrol coverage statistics for the watch commander\'s review.',
      resolution: 'Report completed and submitted. Key stats: 23 incidents responded to, average response time 6.2 minutes, 4 arrests made, 12 citations issued. Flagged the waterfront and Oakwood Heights as areas requiring additional resources.' },
    { task: 'Narcotics Tip Follow-up', location: 'Undisclosed Location',
      report: 'Following up on a confidential informant\'s tip regarding a suspected stash house being operated out of a residential property. CI indicates activity is heaviest between 01:00 and 04:00 on weeknights.',
      resolution: 'Conducted discreet surveillance from 01:00 to 03:30. Observed 6 short-duration visits to the property consistent with drug distribution patterns. All vehicle plates documented. Intelligence package compiled for narcotics unit to pursue a warrant.' },
    { task: 'Abandoned Vehicle Check', location: 'Route 7 Overpass',
      report: 'Highway patrol flagged a vehicle abandoned under the Route 7 overpass for over 48 hours. Vehicle is a white 2017 Ford Focus with no plates. Driver\'s side window is shattered and the interior appears ransacked.',
      resolution: 'VIN check reveals the vehicle was reported stolen from a parking garage downtown 5 days ago. Vehicle towed to impound for forensic processing. Owner notified of recovery. Case linked to the ongoing auto theft investigation.' },
    { task: 'Prowler Report', location: '33 Magnolia Ct',
      report: 'Homeowner called 911 after spotting a figure in dark clothing looking through their ground-floor windows at approximately 01:20. The individual fled into the tree line behind the property when the porch lights were activated.',
      resolution: 'Searched the perimeter and surrounding wooded area with a flashlight. Found fresh footprints in the mud leading toward Birch St. No suspect located. Advised the homeowner on security measures and flagged the address for extra patrol checks.' },
    { task: 'Overnight Building Checks', location: 'Government District',
      report: 'Routine overnight security checks of all government buildings in the district including City Hall, the courthouse, and the public records office. Checking door locks, window integrity, and alarm system status.',
      resolution: 'All buildings secure. Found the rear exit of the public records office unlocked — secured and documented. Alarm systems all showing green status. Completed checks logged and submitted to the facilities manager.' }
  ]
};

const completedPool = {
  day: [
    { task: 'Morning Briefing', location: 'Precinct 7 - Briefing Room',
      report: 'Attended the daily morning briefing covering overnight incidents, active BOLOs, and shift assignments. Watch commander highlighted the increase in vehicle break-ins in Oakwood Heights.',
      resolution: 'Briefing notes recorded. Acknowledged new patrol assignments and reviewed updated BOLO descriptions. Ready for shift deployment.' },
    { task: 'Speed Trap Detail', location: 'School Zone - Elm St',
      report: 'Posted at the Elm St school zone with radar during morning arrival hours. Multiple vehicles clocked exceeding the 15 mph limit, with the fastest recorded at 38 mph.',
      resolution: 'Issued 5 speeding citations over 2 hours. Provided a verbal warning to one parent who was cooperative. School principal thanked the department for the enforcement presence.' },
    { task: 'Pedestrian Accident Report', location: 'Main St & 4th Ave',
      report: 'Responded to a pedestrian struck by a vehicle at the Main St intersection. The victim, a 45-year-old male, sustained minor leg injuries after being clipped by a turning vehicle.',
      resolution: 'Victim transported to Blackwater General with non-life-threatening injuries. Driver remained on scene and cooperated. Determined the driver failed to yield at the crosswalk — citation issued. Report filed.' },
    { task: 'Vehicle Registration Check', location: 'Precinct 7 - Lobby',
      report: 'Walk-in citizen requested verification of a vehicle registration for a private sale. Documentation appeared inconsistent with the VIN on record.',
      resolution: 'Ran the VIN through the database — vehicle came back clean with no theft or lien flags. Discrepancy was a clerical error from the DMV. Advised the citizen to request a corrected title before completing the sale.' },
    { task: 'Parking Meter Audit', location: 'Downtown District',
      report: 'Participated in the monthly parking meter audit with the city revenue department. Several meters on Commerce Row were found to be malfunctioning, accepting coins but not registering time.',
      resolution: 'Identified 8 malfunctioning meters. Revenue department tagged them for repair. No citations issued for vehicles at broken meters. Audit report submitted to city services.' }
  ],
  swing: [
    { task: 'Shift Handoff Briefing', location: 'Precinct 7 - Briefing Room',
      report: 'Attended the day-to-swing shift handoff briefing. Day watch reported a shoplifting arrest at Riverside Market and ongoing surveillance in the Industrial Park area.',
      resolution: 'All open cases and active situations acknowledged. Patrol assignments confirmed for the evening. Radio check completed — all units operational.' },
    { task: 'Traffic Stop Follow-up', location: 'Main St & Harbor Blvd',
      report: 'Conducted a routine traffic stop on a vehicle with a broken taillight. Driver appeared nervous during the interaction and provided an expired insurance card.',
      resolution: 'Driver identified with a valid license. Issued a fix-it ticket for the taillight and a citation for expired insurance. No further issues. Vehicle allowed to proceed.' },
    { task: 'Property Damage Report', location: '12 Cedar Lane',
      report: 'Homeowner reported discovering damage to their fence and mailbox, apparently caused by a vehicle that left the roadway overnight. Tire tracks visible on the lawn leading to the damaged fence section.',
      resolution: 'Scene documented with photos and measurements. Tire track pattern suggests a larger vehicle such as a truck or SUV. No witnesses identified. Report filed for insurance purposes and neighborhood canvass scheduled.' },
    { task: 'Juvenile Curfew Warning', location: 'Riverside Park',
      report: 'Encountered a group of four juveniles in Riverside Park after the 22:00 curfew. All appeared to be between 14-16 years of age. No illegal activity observed — they were sitting on the bleachers talking.',
      resolution: 'Issued verbal curfew warnings to all four individuals. Contacted parents of two minors who were picked up within 20 minutes. The other two lived nearby and were escorted home. No citations issued.' },
    { task: 'Alarm System Reset', location: 'City Library - West Branch',
      report: 'Library alarm system triggered after hours. Alarm company unable to reach the branch manager. Responded to verify building security and determine cause of the activation.',
      resolution: 'Building exterior checked — all entry points secure. Interior visible through windows showed no disturbance. Alarm likely triggered by HVAC system cycling. System reset remotely by alarm company. Branch manager notified via voicemail.' }
  ],
  night: [
    { task: 'Night Shift Briefing', location: 'Precinct 7 - Briefing Room',
      report: 'Attended the swing-to-night shift handoff briefing. Swing watch reported a DUI checkpoint that netted 3 arrests and an ongoing missing person case that has been elevated to priority status.',
      resolution: 'All active cases and BOLOs reviewed. Night patrol assignments confirmed. Extra attention requested for the waterfront and Oakwood Heights areas. Radio check completed.' },
    { task: 'Traffic Stop Follow-up', location: 'Main St & Harbor Blvd',
      report: 'Stopped a vehicle traveling at 52 mph in a 30 mph zone on Main St. Driver was a 22-year-old male who stated he was late for work at the port. No signs of impairment.',
      resolution: 'Issued a speeding citation. Driver was cooperative and accepted the ticket without argument. Valid license and current insurance confirmed. Vehicle released to continue.' },
    { task: 'Building Security Check', location: 'City Hall Annex',
      report: 'During routine overnight checks, noticed the side entrance door of City Hall Annex was ajar. The electronic lock appeared to have malfunctioned, leaving the door unlatched.',
      resolution: 'Cleared the interior of the building — no unauthorized persons found. Nothing appeared disturbed or missing. Door secured with a temporary lock and facilities management contacted for emergency repair. Incident documented.' },
    { task: 'Street Light Outage Report', location: 'Dock Row & 3rd Ave',
      report: 'Identified a cluster of 4 non-functioning street lights along Dock Row between 3rd and 5th Ave. The area is already poorly lit and the outage creates a significant safety concern given recent criminal activity.',
      resolution: 'Submitted an emergency repair request to Public Works. Increased patrol frequency in the affected area for the remainder of the shift. Temporary lighting recommended until repairs are completed.' },
    { task: 'Disturbance Call - Resolved', location: '77 Harbour View Apts',
      report: 'Responded to a noise disturbance on the 3rd floor. Neighbor reported loud arguing and the sound of objects being thrown. Upon arrival, a couple was found in a heated but non-physical argument over finances.',
      resolution: 'Both parties were calm upon officer contact. No signs of physical altercation or property damage. Mediated briefly and suggested counseling resources. Both parties agreed to keep the noise down. No further calls received from the location.' }
  ]
};

// ===== Active Case Data Store =====
let activeCases = [];

// ===== Helpers =====
function getShiftKey(hour) {
  if (hour >= 6 && hour < 14) return 'day';
  if (hour >= 14 && hour < 22) return 'swing';
  return 'night';
}

function getShiftHours(key) {
  if (key === 'day') return { start: 6, end: 14 };
  if (key === 'swing') return { start: 14, end: 22 };
  return { start: 22, end: 6 };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomCaseNum() {
  return '#BW-' + (4400 + Math.floor(Math.random() * 600));
}

function pad(n) { return n.toString().padStart(2, '0'); }

function randomTime(shiftKey) {
  const { start, end } = getShiftHours(shiftKey);
  let hour;
  if (start < end) {
    hour = start + Math.floor(Math.random() * (end - start));
  } else {
    const range = (24 - start) + end;
    const offset = Math.floor(Math.random() * range);
    hour = (start + offset) % 24;
  }
  const min = Math.floor(Math.random() * 4) * 15;
  return `${pad(hour)}:${pad(min)}`;
}

function randomPriority() {
  const r = Math.random();
  if (r < 0.25) return 'high';
  if (r < 0.6) return 'medium';
  return 'low';
}

function randomDuration() {
  const mins = 15 + Math.floor(Math.random() * 8) * 15;
  if (mins >= 60) return `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? (mins % 60) + 'm' : ''}`.trim();
  return `${mins}m`;
}

// ===== Modal Logic =====
function openCaseModal(caseData) {
  const modal = document.getElementById('caseModal');
  document.getElementById('modalCaseNum').textContent = caseData.caseNum;

  const priorityEl = document.getElementById('modalPriority');
  priorityEl.textContent = caseData.priority.toUpperCase();
  priorityEl.className = 'case-modal-priority ' + caseData.priority;

  document.getElementById('modalTitle').textContent = caseData.task;
  document.getElementById('modalLocation').textContent = caseData.location;
  document.getElementById('modalStatus').textContent = caseData.status;
  document.getElementById('modalTime').textContent = caseData.time;
  document.getElementById('modalReport').textContent = caseData.report;
  document.getElementById('modalResolution').textContent = caseData.resolution;

  const resSection = document.getElementById('modalResolutionSection');
  resSection.style.display = caseData.isCompleted ? 'block' : 'none';

  modal.classList.add('active');
}

function closeCaseModal() {
  document.getElementById('caseModal').classList.remove('active');
}

document.getElementById('modalClose').addEventListener('click', closeCaseModal);
document.getElementById('caseModal').addEventListener('click', function(e) {
  if (e.target === this) closeCaseModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCaseModal();
});

// ===== Generate Assignments =====
let currentShiftKey = null;

function generateAssignments() {
  const hour = new Date().getHours();
  const shiftKey = getShiftKey(hour);
  activeCases = [];

  const pool = shuffle(assignments[shiftKey]);
  const count = 3 + Math.floor(Math.random() * 3);
  const activeJobs = pool.slice(0, count);

  const completedCount = 1 + Math.floor(Math.random() * 3);
  const completed = shuffle(completedPool[shiftKey]).slice(0, completedCount);

  // Build active rows
  const activeBody = document.getElementById('activeJobsBody');
  activeBody.innerHTML = '';
  activeJobs.forEach((job, i) => {
    const caseNum = randomCaseNum();
    const time = randomTime(shiftKey);
    const priority = i === 0 ? 'high' : randomPriority();
    const statusText = i === 0 ? 'In Progress' : 'Pending';
    const statusClass = i === 0 ? 'active' : 'pending';

    const caseData = {
      caseNum, task: job.task, location: job.location, priority, time,
      status: statusText, report: job.report, resolution: job.resolution,
      isCompleted: false
    };
    activeCases.push(caseData);
    const idx = activeCases.length - 1;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="case-num"><a class="case-link" data-case-idx="${idx}">${caseNum}</a></td>
      <td><a class="case-link" data-case-idx="${idx}">${job.task}</a></td>
      <td>${job.location}</td>
      <td><span class="priority ${priority}">${priority.toUpperCase()}</span></td>
      <td>${time}</td>
      <td class="duration" data-start="${time}">--</td>
      <td><span class="job-status ${statusClass}">${statusText}</span></td>
    `;
    activeBody.appendChild(tr);
  });

  // Build completed rows
  const completedBody = document.getElementById('completedJobsBody');
  completedBody.innerHTML = '';
  completed.forEach(job => {
    const caseNum = randomCaseNum();
    const time = randomTime(shiftKey);
    const priority = randomPriority();

    const caseData = {
      caseNum, task: job.task, location: job.location, priority, time,
      status: 'Complete', report: job.report, resolution: job.resolution,
      isCompleted: true
    };
    activeCases.push(caseData);
    const idx = activeCases.length - 1;

    const tr = document.createElement('tr');
    tr.classList.add('completed-row');
    tr.innerHTML = `
      <td class="case-num"><a class="case-link" data-case-idx="${idx}">${caseNum}</a></td>
      <td><a class="case-link" data-case-idx="${idx}">${job.task}</a></td>
      <td>${job.location}</td>
      <td><span class="priority ${priority}">${priority.toUpperCase()}</span></td>
      <td>${time}</td>
      <td>${randomDuration()}</td>
      <td><span class="job-status done">Complete</span></td>
    `;
    completedBody.appendChild(tr);
  });

  document.getElementById('activeJobCount').textContent = count;
  currentShiftKey = shiftKey;
  updateDurations();
}

// Event delegation for case links
document.addEventListener('click', function(e) {
  const link = e.target.closest('.case-link');
  if (link) {
    e.preventDefault();
    const idx = parseInt(link.getAttribute('data-case-idx'));
    if (activeCases[idx]) openCaseModal(activeCases[idx]);
  }
});

// ===== Live Clock =====
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('clockTime').textContent = timeStr;
  document.getElementById('clockDate').textContent = dateStr;
}

// ===== Shift Detection =====
function updateShift() {
  const hour = new Date().getHours();
  const el = document.getElementById('currentShift');
  if (!el) return;

  const shiftKey = getShiftKey(hour);

  if (shiftKey === 'day') el.textContent = 'Day Shift';
  else if (shiftKey === 'swing') el.textContent = 'Swing Shift';
  else el.textContent = 'Night Watch';

  if (currentShiftKey && shiftKey !== currentShiftKey) {
    generateAssignments();
  }
}

// ===== Calculate Durations =====
function updateDurations() {
  const now = new Date();
  const cells = document.querySelectorAll('.duration[data-start]');

  cells.forEach(cell => {
    const startStr = cell.getAttribute('data-start');
    const [hours, minutes] = startStr.split(':').map(Number);

    const start = new Date(now);
    start.setHours(hours, minutes, 0, 0);

    if (start > now) {
      const diff = start - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      cell.textContent = `Starts in ${h}h ${m}m`;
      cell.style.color = 'var(--text-muted)';
      return;
    }

    if (now - start > 12 * 3600000) {
      start.setDate(start.getDate() + 1);
      if (start > now) {
        const diff = start - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        cell.textContent = `Starts in ${h}h ${m}m`;
        cell.style.color = 'var(--text-muted)';
        return;
      }
    }

    const elapsed = now - start;
    const h = Math.floor(elapsed / 3600000);
    const m = Math.floor((elapsed % 3600000) / 60000);

    if (h > 0) {
      cell.textContent = `${h}h ${m}m`;
    } else {
      cell.textContent = `${m}m`;
    }
    cell.style.color = 'var(--accent-glow)';
  });
}

// ===== Init =====
generateAssignments();
updateClock();
updateShift();
setInterval(updateClock, 1000);
setInterval(updateShift, 60000);
setInterval(updateDurations, 60000);
