import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findProblem } from "../home/sections/problemStatement/problemData";
import {
    ArrowLeft,
    FileText,
    Target,
    Lightbulb,
    BarChart3,
    Cpu,
    Smile,
    ExternalLink,
    Home,
    LayoutGrid,
    Rocket,
} from "lucide-react";

const ProblemDetail: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const navigate = useNavigate();

    const result = findProblem(category || "", Number(id));

    if (!result) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4FAFB]">
                <h1 className="font-bounded text-3xl text-gray-800 mb-4">
                    Problem Not Found
                </h1>
                <p className="font-euclid text-gray-500 mb-8">
                    The problem you're looking for doesn't exist.
                </p>
                <button
                    onClick={() => navigate("/home")}
                    className="px-6 py-3 rounded-full bg-[#10A0CC] text-white font-euclid font-semibold hover:bg-[#0d8ab0] transition-colors"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const { event, problem } = result;

    const criteriaIcons: Record<string, React.ReactNode> = {
        Innovation: <Lightbulb size={22} />,
        Impact: <BarChart3 size={22} />,
        "Technical Depth": <Cpu size={22} />,
        Usability: <Smile size={22} />,
    };

    return (
        <div className="min-h-screen bg-[#F4FAFB] pb-24">
            {/* Back Navigation */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-2xl mx-auto px-4 py-3 flex items-center">
                    <button
                        onClick={() => navigate("/home")}
                        className="flex items-center gap-2 text-[#10A0CC] font-euclid font-semibold text-sm hover:text-[#0d8ab0] transition-colors cursor-pointer"
                    >
                        <ArrowLeft size={18} />
                        Back to Problems
                    </button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 pt-6 pb-8">
                {/* Title Section */}
                <h1 className="font-bounded text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                    {problem.title.split(":").length > 1 ? (
                        <>
                            {problem.title.split(":")[0]}:{" "}
                            <span className="text-[#10A0CC]">
                                {problem.title.split(":").slice(1).join(":")}
                            </span>
                        </>
                    ) : (
                        problem.title
                    )}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs px-3 py-1.5 bg-[#E6F6FA] text-[#10A0CC] rounded-full font-euclid font-semibold">
                        {event.event}
                    </span>
                    <span className="text-xs px-3 py-1.5 bg-[#E6F6FA] text-[#10A0CC] rounded-full font-euclid font-semibold">
                        {problem.difficulty}
                    </span>
                    {problem.tags.slice(0, 2).map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-euclid font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Problem Overview Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#E6F6FA] flex items-center justify-center">
                            <FileText size={16} className="text-[#10A0CC]" />
                        </div>
                        <h2 className="font-bounded text-lg font-bold text-gray-900">
                            Problem Overview
                        </h2>
                    </div>
                    <p className="font-euclid text-sm text-gray-600 leading-relaxed mb-6">
                        {problem.description}
                    </p>

                    {/* Objectives */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-[#E6F6FA] flex items-center justify-center">
                            <Target size={14} className="text-[#10A0CC]" />
                        </div>
                        <h3 className="font-euclid text-sm font-bold text-gray-900">
                            Objectives
                        </h3>
                    </div>
                    <ul className="space-y-2 mb-6 pl-1">
                        {problem.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#10A0CC] shrink-0" />
                                <span className="font-euclid text-sm text-gray-600 leading-relaxed">
                                    {obj}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Expected Solution */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-[#E6F6FA] flex items-center justify-center">
                            <Rocket size={14} className="text-[#10A0CC]" />
                        </div>
                        <h3 className="font-euclid text-sm font-bold text-gray-900">
                            Expected Solution
                        </h3>
                    </div>
                    <p className="font-euclid text-sm text-gray-600 leading-relaxed">
                        {problem.expectedSolution}
                    </p>
                </div>

                {/* Evaluation Criteria */}
                <h2 className="font-bounded text-lg font-bold text-gray-900 mb-4">
                    Evaluation Criteria
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {problem.evaluationCriteria.map((c, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center gap-2"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#E6F6FA] flex items-center justify-center text-[#10A0CC]">
                                {criteriaIcons[c.name] || <Lightbulb size={22} />}
                            </div>
                            <h4 className="font-euclid text-sm font-bold text-gray-900">
                                {c.name}
                            </h4>
                            <p className="font-euclid text-xs text-gray-500">
                                {c.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Resources */}
                <h2 className="font-bounded text-lg font-bold text-gray-900 mb-4">
                    Resources
                </h2>
                <div className="space-y-3 mb-6">
                    {problem.resources.map((r, i) => (
                        <a
                            key={i}
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-[#10A0CC]/30 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#E6F6FA] flex items-center justify-center">
                                    <FileText size={18} className="text-[#10A0CC]" />
                                </div>
                                <div>
                                    <h4 className="font-euclid text-sm font-bold text-gray-900 group-hover:text-[#10A0CC] transition-colors">
                                        {r.name}
                                    </h4>
                                    <p className="font-euclid text-xs text-gray-500">
                                        {r.description}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink
                                size={16}
                                className="text-gray-400 group-hover:text-[#10A0CC] transition-colors shrink-0"
                            />
                        </a>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {problem.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1.5 bg-[#E6F6FA] text-[#10A0CC] rounded-full font-euclid font-medium"
                        >
                            #{tag.replace("#", "")}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-3">
                    <button
                        onClick={() => navigate("/home")}
                        className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#10A0CC] transition-colors cursor-pointer"
                    >
                        <Home size={20} />
                        <span className="font-euclid text-[10px] font-medium">HOME</span>
                    </button>
                    <button
                        onClick={() => navigate("/home")}
                        className="flex flex-col items-center gap-1 text-[#10A0CC] cursor-pointer"
                    >
                        <LayoutGrid size={20} />
                        <span className="font-euclid text-[10px] font-semibold">
                            PROBLEMS
                        </span>
                    </button>
                    <a
                        href={problem.resources[0]?.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#10A0CC] text-white px-5 py-2.5 rounded-full font-euclid text-sm font-semibold hover:bg-[#0d8ab0] transition-colors shadow-lg shadow-[#10A0CC]/20"
                    >
                        Start Building
                        <Rocket size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProblemDetail;
