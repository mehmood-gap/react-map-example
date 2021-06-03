const Tooltip = ({point, xScale, yScale, width, height}) => {
  if (!point) {
    return null;
  }
  const tipY = 50;

  const screenX = xScale(point.x);
  const screenY = yScale(point.y);
  const time = new Date(point.x).toLocaleString();
  const value = point.y.toFixed(3);
  const tipContent = (
    <>
      <div>
        <span className={styles.tooltipLabel}>Time</span>: {time}
      </div>
      <div>
        <span className={styles.tooltipLabel}>Value</span>: {value}
      </div>
    </>
  );

  const placeRight = screenX < width / 2;
  const tipOverlay: Layout = {
    size: {
      width: placeRight ? width - screenX : screenX,
      height,
    },
    pos: {
      x: placeRight ? screenX : 0,
      y: tipY,
    },
  };
  const tipStyles = [
    styles.tooltip,
    placeRight ? styles.tooltipRight : styles.tooltipLeft,
  ].join(' ');
  return (
    <g pointerEvents="none">
      <circle
        cx={screenX}
        cy={screenY}
        r={3}
        fill="none"
        stroke="blue"
        strokeWidth={3}
      />
      <Translate {...tipOverlay.pos}>
        <foreignObject {...tipOverlay.size}>
          <div className={styles.tooltipContainer}>
            <div className={tipStyles}>{tipContent}</div>
          </div>
        </foreignObject>
      </Translate>
      {/* line indicating hover point */}
      <line
        x1={screenX}
        y1={0}
        x2={screenX}
        y2={height}
        stroke="darkslategray"
        strokeWidth={1}
      />
    </g>
  );
};
