export const BadgeIcon = () => (
  <svg width={64} height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={64}
      height={64}
    >
      <path fill="#D9D9D9" d="M0 0h64v64H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M10.533 57.333A3.725 3.725 0 0 1 7.8 56.2a3.725 3.725 0 0 1-1.133-2.733v-29.6c0-1.067.377-1.978 1.133-2.734A3.725 3.725 0 0 1 10.533 20h15.6V9.667c0-.8.311-1.5.934-2.1.622-.6 1.333-.9 2.133-.9h5.667c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1V20h15.6c1.066 0 1.977.378 2.733 1.133a3.725 3.725 0 0 1 1.133 2.734v29.6A3.725 3.725 0 0 1 56.2 56.2a3.725 3.725 0 0 1-2.733 1.133H10.533Zm0-3h42.934c.266 0 .477-.077.633-.233.155-.156.233-.367.233-.633v-29.6c0-.267-.078-.478-.233-.634-.156-.155-.367-.233-.633-.233h-15.6c0 1.067-.323 1.845-.967 2.333-.645.49-1.478.734-2.5.734h-4.8c-.978 0-1.8-.245-2.467-.734-.666-.488-1-1.266-1-2.333h-15.6c-.266 0-.477.078-.633.233-.156.156-.233.367-.233.634v29.6c0 .266.077.477.233.633.155.156.367.233.633.233ZM16 46.867h15.133v-.6c0-.711-.177-1.345-.533-1.9-.356-.556-.822-.945-1.4-1.167-1.244-.444-2.278-.744-3.1-.9a12.73 12.73 0 0 0-2.367-.233c-.844 0-1.733.089-2.666.266-.934.178-1.956.467-3.067.867-.578.222-1.056.611-1.433 1.167a3.3 3.3 0 0 0-.567 1.9v.6Zm21.733-4.334h11.134V39.8H37.733v2.733Zm-14-2.733c.89 0 1.656-.322 2.3-.967.645-.644.967-1.41.967-2.3 0-.933-.322-1.722-.967-2.366-.644-.645-1.41-.967-2.3-.967-.933 0-1.722.322-2.366.967-.645.644-.967 1.433-.967 2.366 0 .89.322 1.656.967 2.3.644.645 1.433.967 2.366.967Zm14-4.133h11.134V33H37.733v2.667ZM29.2 23h5.667V9.667H29.2V23Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
)
