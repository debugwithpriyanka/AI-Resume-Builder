function JobCard({ job }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
      }}
    >
      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>Match : {job.match_score}%</p>

      <a href={job.apply_link} target="_blank" rel="noreferrer">
        Apply
      </a>
    </div>
  );
}

export default JobCard;