export function NavLinks({ onClick }: { onClick?: () => void }) {
return (
<ul className="space-y-4 text-gray-900 md:space-y-0 md:flex md:space-x-6">
{['Home', 'About', 'Shop', 'Contact'].map((link) => (
<li key={link}>
<button onClick={onClick} className="hover:text-[#f5c06c] transition">
{link}
</button>
</li>
))}
</ul>
);
}