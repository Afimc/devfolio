export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const heroContent = {
  title: 'Miroslav Peshev',
  headline: 'Web Developer',
  summary:
    `🚀 Resolving all software challenges, ensuring responsive and cutting-edge web applications that
    enhance user experiences`,
  tags: [
     '✅ High-Quality Code', '📱 Responsive Designs', '🌐 Scalable Solutions', '⏰ Timely Delivery', 
     '📞 Effective Communication','🧠 Problem-Solving',
  ],
}

export const stats = [
  { label: 'Production builds', value: '4', hint: 'Angular & React apps delivered for clients' },
  { label: 'Page-load gain', value: 'UpTo 30%', hint: 'through structure and component optimizations' },
]

export const capabilities = [
  {
    title: 'Front-end development',
    description: 'Modern UI development with Angular/React, TypeScript, SCSS, and composable component systems.',
    tags: ['Angular', 'React', 'TypeScript', 'SCSS', 'Vite'],
  },
  {
    title: 'Real-time & APIs',
    description: 'Realtime experiences with Socket.io, secure API integration, and predictable client state.',
    tags: ['Socket.io', 'Express', 'Node.js', 'Firestore', 'Zustand'],
  },
]

export const projects = [
  {
    title: 'ChessIRO',
    category: 'Realtime multiplayer chess',
    description: 'Built a secure, real-time chess app with room creation, password protection, and complete chess logic.',
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'SCSS', 'Express', 'Socket.io', 'Linode'],
    result: 'Live game state sync and stable long-running WebSocket sessions in production.',
    gitHubLink: 'https://github.com/Afimc/chess'
  },
  {
    title: 'NextChar Predictor',
    category: 'Predictive typing',
    description: 'Custom next-character prediction engine with weighted probabilities and ranked suggestions.',
    stack: ['React', 'TypeScript', 'Zustand', 'Custom algorithm'],
    result: 'Real-time predictions with trainable English and Bulgarian language packs.',
    gitHubLink: 'https://github.com/Afimc/next-char-predictor'
  },
  {
    title: 'Neotron Visualizer',
    category: 'Simulation & visualization',
    description: 'Interactive probabilistic simulation tool with live visualizations and animated UI.',
    stack: ['React', 'TypeScript', 'Zustand', 'Pixi.js', 'Framer Motion', 'Recharts'],
    result: 'Step-by-step simulation with live stats and motion-rich visuals.',
    gitHubLink: 'https://github.com/Afimc/Neotron-visualizer'
  },
  {
    title: 'Logic Gates Simulator',
    category: 'Interactive circuit builder',
    description: 'Drag-and-drop logic circuit simulator with live signal propagation across connected nodes.',
    stack: ['React', 'TypeScript', 'Vite', 'React Flow'],
    result: 'Responsive editor with real-time gate outputs and adjustable inputs.',
    gitHubLink: 'https://github.com/Afimc/logic-gate-simulator'
  },
]

export const timeline = [
  {
    period: 'Aug 2024 - Present',
    title: 'Front-End Web Developer',
    company: 'Cignus Consulting',
    detail:
      'Building production Angular apps with TypeScript/SCSS, reusable components, mapping/visualization libraries (Cesium, Mapbox, ApexCharts), and performance/debugging improvements.',
  },
  {
    period: 'Jun 2024 - Present',
    title: 'Full-Stack Web Developer',
    company: 'Interval Pro',
    detail:
      'Delivering end-to-end features across React/Node, real-time sync with Socket.io, reusable components, and 30% faster page loads.',
  },
]

export const education = [
  {
    period: '2009',
    title: 'Vocational High School of Electrical Engineering',
    institution: 'Diploma',
    detail: 'Circuit design, simulation software, automation technologies, and team-based projects.',
  },
]

export const certifications = [
  {
    title: 'Udemy - The Complete Web Developer Zero to Mastery',
    detail: 'Completed an extensive course covering full-stack web development.',
  },
  {
    title: 'freeCodeCamp.org - React JavaScript Framework',
    detail: 'Completed the full React course.',
  },
  {
    title: 'Google, Santander - Google: Artificial intelligence and productivity',
    detail: 'Certification ID: OA-2024-0823000517882.',
  },
]

export const socials = [
  { label: 'Email', value: 'miroslavpeshev.dev@gmail.com', href: 'mailto:miroslavpeshev.dev@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/miroslav-peshev', href: 'https://www.linkedin.com/in/miroslav-peshev' },
  { label: 'GitHub', value: 'github.com/Afimc', href: 'https://github.com/Afimc' },
  { label: 'Phone', value: '+44 785 625 7524', secondary: '+359 898 475 400', href: 'tel:+447856257524' },
]
