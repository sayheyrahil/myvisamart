import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS, WEB_URL } from "@/utils/constants";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";

const Categories = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [activeIdx, setActiveIdx] = useState(0);

	const [categories, setCategories] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		axiosInstance
			.post(ENDPOINTS.category_active)
			.then((response: any) => {
 				// handleAxiosSuccess(response); // Uncomment if you want a toast
				setCategories(response?.data?.data || []);
			})
			.catch((err: any) => {
				handleAxiosError(err);
 			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const scroll = (direction: any) => {
		let newIdx = activeIdx;
		if (direction === "left") {
			newIdx = Math.max(0, activeIdx - 1);
		} else {
			newIdx = Math.min(categories.length - 1, activeIdx + 1);
		}
		setActiveIdx(newIdx);

		if (scrollRef.current) {
			const children = scrollRef.current.children;
			let scrollOffset = 0;
			for (let i = 0; i < newIdx; i++) {
				const child = children[i] as HTMLElement;
				scrollOffset += child.offsetWidth + 16; // 16px = gap-4
			}
			scrollRef.current.scrollTo({
				left: scrollOffset,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="w-full bg-[#f8fafc] py-12 flex justify-center">
			<div className="w-[1170px]">
				{/* Header */}
				<div className="flex items-center justify-between mb-6">
					<div>
						<h2 className="text-3xl font-bold text-gray-900">Categories</h2>
						<p className="text-gray-600 mt-2 max-w-xl">
							Here are lots of interesting destinations to visit, but don’t be
							confused—they’re already grouped by category.
						</p>
					</div>

					{/* Arrows */}
					<div className="flex gap-2">
						<button
							onClick={() => scroll("left")}
							className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => scroll("right")}
							className="p-2 rounded-full bg-blue-600 text-white hover:bg-brand"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>

				{/* Loading/Error */}
				{loading && (
					<div className="text-center py-8 text-gray-500">
						Loading categories...
					</div>
				)}
				{error && <div className="text-center py-8 text-red-500">{error}</div>}

				{/* Scrollable cards */}
				{!loading && !error && (
					<div
						ref={scrollRef}
						className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
					>
						{categories.map((cat, idx) => (
							<div
								key={cat.id || idx}
								className={`relative ${
									idx === activeIdx
										? "min-w-[260px] w-[260px] h-[300px]"
										: "min-w-[120px] w-[150px] h-[300px]"
								} rounded-2xl overflow-hidden group flex-shrink-0 transition-all duration-300`}
							>
								<img
									src={WEB_URL + cat.image}
									alt={cat.title}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
									<p className="text-lg font-medium">{cat.name}</p>
									<ArrowUpRight size={18} />
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Categories;
